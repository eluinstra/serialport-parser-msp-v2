# SerialPort MSP V2 Parser

## Introduction

Parser for [SerialPort](https://www.npmjs.com/package/serialport) that implements Multiwii Serial Protocol Version 2 according to the [MSP-V2](https://github.com/iNavFlight/inav/wiki/MSP-V2) specifications.

## Installation

```bash
npm install serialport-parser-msp-v2
```

## Usage

The parser can [encode](#encoding-commands) MSP commands and [decode](#decoding-responses) MSP responses.

MSP commands and responses are of type MspMsg.

```javascript
interface MspMsg {
  cmd: number,
  flag: number,
  buffer: number[]
}
```

Flag has a default value of 0.

### Encoding commands

The MSPEncoder encodes MSP commands.

#### Initialisation

```javascript
new MspEncoder()
```

#### Example

This example writes an MSP_IDENT command to the serialport.

```javascript
import SerialPort from 'serialport'
import { MspCmd, MspMsg, MspEncoder } from 'serialport-parser-msp-v2'

const serialPort = new SerialPort('/dev/ttyUSB0')
const encoder = new MspEncoder().pipe(serialPort)
const mspCmd = {
    cmd: MspCmd.MSP_IDENT,
    buffer: []
  }
encoder.write(mspCmd)
```

For more examples see [here](https://github.com/eluinstra/serialport-parser-msp-v2/blob/1.x/src/MspEncoder.test.ts).

If the MspEncoder gives an error, you can encode the MspCmd as follows:

```javascript
import SerialPort from 'serialport'
import { encode, MspCmd, MspMsg } from 'serialport-parser-msp-v2'

const serialPort = new SerialPort('/dev/ttyUSB0')
const mspCmd = {
    cmd: MspCmd.MSP_IDENT,
    buffer: []
  }
serialPort.write(encode(mspCmd))
```

### Decoding responses

The MSPEncoder decodes MSP responses.

#### Initialisation

```javascript
new MspDecoder()
```

#### Example

This example registers a function that will receive

- an Error object when an MSP error message is received
- an MspMsg object when an MSP response message is received

```javascript
import SerialPort from 'serialport'
import { MspCmd, MspMsg, MspDecoder } from 'serialport-parser-msp-v2'

const serialPort = new SerialPort('/dev/ttyUSB0')
const decoder = serialPort.pipe(new MspDecoder())
parser.on('data', function (object: any) {
    if (object instanceof Error)
      console.log("MSP Error received")
    else
      console.log("MspResponse: " + object)
  })
```

For more examples see [here](https://github.com/eluinstra/serialport-parser-msp-v2/blob/1.x/src/MspDecoder.test.ts).
