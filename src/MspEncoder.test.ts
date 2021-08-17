import { MspCmd } from './Msp'
import { checksum, MspEncoder, numberToInt16LE, stringToCharArray } from './MspEncoder'

test.each([
  [0, [0, 0]],
  [256, [0, 1]]
])('toInt16(%i)', (value, expected) => {
  const actual = numberToInt16LE(value);
  expect(actual).toMatchObject(expected);
})

test.each([
  [[0x00, 0x64, 0x00, 0x00, 0x00], 0x8f],
  [[0xa5, 0x42, 0x42, 0x12, 0x00, 0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x66, 0x6c, 0x79, 0x69, 0x6e, 0x67, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64], 0x82]
])('checksum(%j)', (array, expected) => {
  const actual = checksum(Buffer.from(array))
  expect(actual).toBe(expected)
})

test('parseDataBuffer ""', () => {
  const callback = jest.fn(x => x)
  const encoder = new MspEncoder()
  encoder.on('data', callback)
  encoder.write({
    cmd: MspCmd.MSP_IDENT,
    buffer: []
  })
  expect(callback).toBeCalled()
  expect(callback.mock.calls.length).toBe(1)
  expect(callback.mock.calls[0][0]).toMatchObject(Buffer.from([0x24, 0x58, 0x3C, 0x00, 0x64, 0x00, 0x00, 0x00, 0x8F]))
})

test('parseDataBuffer "Hello flying world"', () => {
  const callback = jest.fn(x => x)
  const encoder = new MspEncoder()
  encoder.on('data', callback)
  encoder.write({
    cmd: 0x4242,
    flag: 0xa5,
    buffer: stringToCharArray('Hello flying world')
  })
  expect(callback).toBeCalled()
  expect(callback.mock.calls.length).toBe(1)
  expect(callback.mock.calls[0][0]).toMatchObject(Buffer.from([0x24, 0x58, 0x3C, 0xa5, 0x42, 0x42, 0x12, 0x00, 0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x66, 0x6c, 0x79, 0x69, 0x6e, 0x67, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x82]))
})
