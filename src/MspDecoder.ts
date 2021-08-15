import { Transform } from "stream";
import { MspMsg } from "./Msp";
import { createMspMsgState, MspMsgState, MspState, parseNextCharCode } from "./MspParser";

export class MspDecoder extends Transform {
  msgState: MspMsgState

  constructor(options = {}) {
    super({ ...options, objectMode: true })
    this.msgState = createMspMsgState()
  }

  _transform(buffer, _, cb) {
    buffer.forEach((c) => {
      parseNextCharCode(this.msgState, c)
      this.applyMsgState()
    });
    cb()
  }

  private applyMsgState = () => {
    const msgState = this.msgState
    if (msgState.state == MspState.MSP_COMMAND_RECEIVED) {
      this.push(toMspMsg(msgState))
      msgState.state = MspState.MSP_IDLE
    } else if (msgState.state == MspState.MSP_ERROR_RECEIVED) {
      this.push(new Error())
      msgState.state = MspState.MSP_IDLE
    }
  }

}

const toMspMsg = ({ cmd, flag = 0, buffer }): MspMsg  => {
  return { cmd: cmd, flag: flag, buffer: buffer }
}
