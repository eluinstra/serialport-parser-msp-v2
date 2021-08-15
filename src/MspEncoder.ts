import { Transform } from "stream";
import { crc8_dvb_s2, mspCmdHeader, MspMsg } from "./Msp";

export class MspEncoder extends Transform {
  constructor(options = {}) {
    super({ ...options, objectMode: true })
  }

  _transform(buffer, _, cb) {
    cb(null, Buffer.from(encode(buffer)))
  }
}

export const numberToInt16LE = (n: number) => [n & 0x00FF, (n & 0xFF00) >> 8]

export const stringToCharArray = (buffer: string): number[] => Array.from(buffer, c => c.charCodeAt(0))

const _mspCmdHeader = stringToCharArray(mspCmdHeader);

const encode = ({ cmd, buffer, flag = 0 }: MspMsg): number[] => {
  const content: number[] = [].concat([flag], numberToInt16LE(cmd), numberToInt16LE(buffer.length), buffer)
  return [].concat(_mspCmdHeader, content, [checksum(content)])
}

export const checksum = (buffer: number[]): number => buffer.reduce((crc, n) => crc8_dvb_s2(crc, n), 0)
