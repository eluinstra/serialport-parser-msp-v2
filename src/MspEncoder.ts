import { Transform } from "stream";
import { crc8_dvb_s2, mspCmdHeader, MspMsg } from "./Msp";

export class MspEncoder extends Transform {
  constructor(options = {}) {
    super({ ...options, objectMode: true })
  }

  _transform(buffer, _, cb) {
    cb(null, encode(buffer))
  }
}

export const numberToInt16LE = (n: number) => [n & 0x00FF, (n & 0xFF00) >> 8]

export const stringToCharArray = (buffer: string): number[] => Array.from(buffer, c => c.charCodeAt(0))

const _mspCmdHeader = stringToCharArray(mspCmdHeader);

export const encode = ({ cmd, buffer, flag = 0 }: MspMsg): Buffer => {
  const result = Buffer.allocUnsafe(_mspCmdHeader.length + 5 + buffer.length + 1);
  _mspCmdHeader.forEach((v, i) => result.writeUInt8(v, i))
  result.writeUInt8(flag, _mspCmdHeader.length)
  result.writeUInt16LE(cmd, _mspCmdHeader.length + 1)
  result.writeUInt16LE(buffer.length, _mspCmdHeader.length + 3)
  buffer.forEach((v, i) => result.writeUInt8(v, _mspCmdHeader.length + 5 + i))
  result.writeUInt8(checksum(result.slice(_mspCmdHeader.length, result.length - 1)), result.length - 1)
  return result
}

export const checksum = (buffer: Buffer): number => buffer.reduce((crc, n) => crc8_dvb_s2(crc, n), 0)
