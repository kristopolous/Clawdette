## Purpose
Queries the terminal and awaits responses without timeouts by using DA1 (Device Attributes) as a synchronization mechanism to distinguish terminal responses from keyboard input.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: 
  - TerminalResponse type from parse-keypress.js
  - csi function from termio/csi.js
  - osc function from termio/osc.js

## Logic
1. **TerminalQuery Type**: Defines a generic type pairing an outbound request sequence with a matcher function that recognizes the expected inbound response.

2. **Response Types**: Defines TypeScript types for extracting specific terminal responses from the TerminalResponse union:
   - DecrpmResponse: DEC private mode status
   - Da1Response: Primary Device Attributes
   - Da2Response: Secondary Device Attributes (terminal version)
   - KittyResponse: Kitty keyboard protocol flags
   - CursorPosResponse: Cursor position
   - OscResponse: OSC dynamic color/query
   - XtversionResponse: Terminal name/version

3. **Query Builders**: Functions that create TerminalQuery instances for specific terminal capabilities:
   - decrqm(mode): Queries DEC private mode status
   - da1(): Primary Device Attributes query (used as sentinel)
   - da2(): Secondary Device Attributes query (gets terminal version)
   - kittyKeyboard(): Queries Kitty keyboard protocol flags
   - cursorPosition(): Requests cursor position with DEC-private marker
   - oscColor(code): Queries dynamic color values (foreground/background)
   - xtversion(): Requests terminal name/version (survives SSH)

4. **TerminalQuerier Class**: Main class for managing query/response synchronization:
   - Maintains queue of pending queries and sentinels
   - send(): Sends a query and returns promise that resolves with response or undefined
   - flush(): Sends DA1 sentinel, resolves when it arrives, and resolves pending queries with undefined (meaning unsupported)
   - onResponse(): Dispatches parsed responses to matching queries or sentinels using FIFO matching

5. **Key Design**: Uses DA1 (CSI c) as a sentinel because:
   - Every terminal since VT100 responds to DA1
   - Terminals answer queries in order
   - If query response arrives before DA1, terminal supports it
   - If DA1 arrives first, terminal doesn't support the query

## Exports
- `TerminalQuery<T>` - Generic type for terminal requests with response matchers
- All response type exports: DecrpmResponse, Da1Response, Da2Response, KittyResponse, CursorPosResponse, OscResponse, XtversionResponse
- Query builder functions: decrqm(), da1(), da2(), kittyKeyboard(), cursorPosition(), oscColor(), xtversion()
- `TerminalQuerier` - Main class with send(), flush(), and onResponse() methods for query/response handling