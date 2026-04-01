## Purpose
Defines ANSI control characters and escape sequence introducers based on ECMA-48 / ANSI X3.64 standards, providing constants and helper functions for working with low-level ANSI escape sequences.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: None specified (self-contained module)

## Logic
1. **C0 Control Characters**: Defines the C0 (7-bit) control character constants as an object with properties for each control character from NUL (0x00) to DEL (0x7f), including:
   - Transmission control: SOH, STX, ETX, EOT, ENQ, ACK
   - Bell and formatting: BEL, BS, HT, LF, VT, FF, CR, SO, SI
   - Data link escape: DLE, DC1-4, NAK, SYN, ETB
   - Device control: CAN, EM, SUB, ESC, FS, GS, RS, US
   - Delete: DEL

2. **String Constants for Output**:
   - ESC: Escape character ('\x1b')
   - BEL: Bell character ('\x07')
   - SEP: Parameter separator (';')

3. **Escape Sequence Type Introducers**: Defines ESC_TYPE object with byte values for different escape sequence introducers that follow the ESC character:
   - CSI: Control Sequence Introducer (0x5b - '[')
   - OSC: Operating System Command (0x5d - ']')
   - DCS: Device Control String (0x50 - 'P')
   - APC: Application Program Command (0x5f - '_')
   - PM: Privacy Message (0x5e - '^')
   - SOS: Start of String (0x58 - 'X')
   - ST: String Terminator (0x5c - '\')

4. **Helper Functions**:
   - isC0(byte): Checks if a byte is a C0 control character (< 0x20 or === 0x7f)
   - isEscFinal(byte): Checks if a byte is a valid ESC sequence final byte (0x30-0x7e)

## Exports
- `C0` - Object containing all C0 control character constants
- `ESC` - String constant for escape character
- `BEL` - String constant for bell character
- `SEP` - String constant for parameter separator
- `ESC_TYPE` - Object containing escape sequence type introducer constants
- `isC0` - Function to check if a byte is a C0 control character
- `isEscFinal` - Function to check if a byte is a valid ESC sequence final byte