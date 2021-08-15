import { crc8_dvb_s2 } from "./Msp"

export enum MspState {
  MSP_IDLE,
  MSP_HEADER_START,
  MSP_HEADER_X,
  MSP_HEADER_V2_NATIVE,
  MSP_PAYLOAD_V2_NATIVE,
  MSP_CHECKSUM_V2_NATIVE,
  MSP_COMMAND_RECEIVED,
  MSP_ERROR_RECEIVED
}

export interface MspMsgState {
  state: MspState,
  flag: number,
  cmd: number,
  length: number,
  buffer: number[],
  checksum: number
}

export const createMspMsgState = () : MspMsgState => {
  return {
    state: MspState.MSP_IDLE,
    flag: 0,
    cmd: 0,
    length: 0,
    buffer: [],
    checksum: 0
  }
}

export const parseNextCharCode = (mspMsgState: MspMsgState, ch: number) => {
  switch (mspMsgState.state) {
    case MspState.MSP_IDLE:
      if (String.fromCharCode(ch) == '$')
        mspMsgState.state = MspState.MSP_HEADER_START
      else
        mspMsgState.state = MspState.MSP_IDLE
      break
    case MspState.MSP_HEADER_START:
      mspMsgState.buffer = []
      mspMsgState.checksum = 0
      if (String.fromCharCode(ch) == 'X')
        mspMsgState.state = MspState.MSP_HEADER_X
      else
        mspMsgState.state = MspState.MSP_IDLE
      break
    case MspState.MSP_HEADER_X:
      if (String.fromCharCode(ch) == '>')
        mspMsgState.state = MspState.MSP_HEADER_V2_NATIVE
      else if (String.fromCharCode(ch) == '!')
        mspMsgState.state = MspState.MSP_ERROR_RECEIVED
      else
        mspMsgState.state = MspState.MSP_IDLE
      break
    case MspState.MSP_HEADER_V2_NATIVE:
      mspMsgState.buffer.push(ch & 0xFF)
      mspMsgState.checksum = crc8_dvb_s2(mspMsgState.checksum, ch)
      if (mspMsgState.buffer.length == 5) {
        mspMsgState.flag = getFlag(mspMsgState.buffer)
        mspMsgState.cmd = getCmd(mspMsgState.buffer)
        mspMsgState.length = getLength(mspMsgState.buffer)
        mspMsgState.buffer = []
        if (mspMsgState.length > 0)
          mspMsgState.state = MspState.MSP_PAYLOAD_V2_NATIVE
        else
          mspMsgState.state = MspState.MSP_CHECKSUM_V2_NATIVE
      }
      break
    case MspState.MSP_PAYLOAD_V2_NATIVE:
      mspMsgState.buffer.push(ch & 0xFF)
      mspMsgState.checksum = crc8_dvb_s2(mspMsgState.checksum, ch)
      mspMsgState.length--
      if (mspMsgState.length == 0)
        mspMsgState.state = MspState.MSP_CHECKSUM_V2_NATIVE
      break
    case MspState.MSP_CHECKSUM_V2_NATIVE:
      if (mspMsgState.checksum == (ch & 0xFF))
        mspMsgState.state = MspState.MSP_COMMAND_RECEIVED
      else
        mspMsgState.state = MspState.MSP_IDLE
      break
    case MspState.MSP_ERROR_RECEIVED:
      mspMsgState.state = MspState.MSP_IDLE
      break
    default:
      mspMsgState.state = MspState.MSP_IDLE
      break
  }
}

const getFlag = (b: number[]) => b[0]
const getCmd = (b: number[]) => b[1] + (b[2] << 8)
const getLength = (b: number[]) => b[3] + (b[4] << 8)
