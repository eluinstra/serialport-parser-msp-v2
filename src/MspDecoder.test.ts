import { MspCmd } from './Msp'
import { MspDecoder } from './MspDecoder'

test('parseDataBuffer ""', () => {
  const callback = jest.fn(x => x)
  const parser = new MspDecoder()
  parser.on('data', callback)
  parser.write(Buffer.from([0x24, 0x58, 0x3e, 0x00, 0x64, 0x00, 0x00, 0x00, 0x8f]))
  expect(callback).toBeCalled()
  expect(callback.mock.calls.length).toBe(1)
  expect(callback.mock.calls[0][0]).toMatchObject({
    cmd: MspCmd.MSP_IDENT,
    flag: 0,
    buffer: []
  })
})

test('parseDataBuffer "Hello flying world"', () => {
  const callback = jest.fn(x => x)
  const parser = new MspDecoder()
  parser.on('data', callback)
  parser.write(Buffer.from([0x24, 0x58, 0x3e, 0xa5, 0x42, 0x42, 0x12, 0x00, 0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x66, 0x6c, 0x79, 0x69, 0x6e, 0x67, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x82]))
  expect(callback).toBeCalled()
  expect(callback.mock.calls.length).toBe(1)
  expect(callback.mock.calls[0][0]).toMatchObject({
    cmd: 0x4242,
    flag: 0xa5,
    buffer: [0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x20, 0x66, 0x6c, 0x79, 0x69, 0x6e, 0x67, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64]
  })
})

test('parseDataBuffer MSP Error', () => {
  const callback = jest.fn(x => x)
  const parser = new MspDecoder()
  parser.on('data', callback)
  parser.write(Buffer.from([0x24, 0x58, 0x21]))
  expect(callback).toBeCalled()
  expect(callback.mock.calls.length).toBe(1)
  expect(callback.mock.calls[0][0]).toMatchObject(new Error('MSP Error'))
})

test.each([
  [[0x24, 0x58, 0x3c, 0x00, 0x64, 0x00, 0x00, 0x00, 0x8f]],
  [[0x24, 0x58, 0x3e, 0x00, 0x64, 0x00, 0x00, 0x00, 0x80]]
])('parseDataBuffer Invalid message %j', (array) => {
  const callback = jest.fn(x => x)
  const parser = new MspDecoder()
  parser.on('data', callback)
  parser.write(Buffer.from(array))
  expect(callback).toHaveBeenCalledTimes(0)
})
