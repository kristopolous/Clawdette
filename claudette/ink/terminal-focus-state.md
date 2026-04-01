## Purpose
Manages terminal focus state using DECSET 1004 focus events, providing non-React access to focus status for synchronizing UI behavior with terminal focus changes.

## Imports
- **Stdlib**: None specified
- **External**: None specified
- **Internal**: None specified (self-contained module)

## Logic
1. **TerminalFocusState Type**: Defines a union type with three possible states:
   - 'focused': Terminal has focus
   - 'blurred': Terminal lost focus
   - 'unknown': Default state for terminals that don't support focus reporting

2. **State Management**:
   - focusState variable tracks current state (defaults to 'unknown')
   - resolvers Set stores functions to resolve when terminal blurs
   - subscribers Set stores change listeners for focus state updates

3. **Core Functions**:
   - setTerminalFocused(v): Updates focus state and notifies subscribers; if blurring, resolves all pending resolvers
   - getTerminalFocused(): Returns true if state is not 'blurred'
   - getTerminalFocusState(): Returns raw TerminalFocusState value
   - subscribeTerminalFocus(cb): Registers a callback for focus changes (returns unsubscribe function)
   - resetTerminalFocusState(): Resets state to 'unknown' and notifies subscribers

4. **Behavior**:
   - Treats 'unknown' same as 'focused' (no throttling) for consumer safety
   - Notifies subscribers synchronously when focus changes
   - Used by TerminalFocusProvider to avoid polling for focus state
   - Resolvers are cleared when terminal blurs to prevent memory leaks

## Exports
- `TerminalFocusState` - Union type: 'focused' | 'blurred' | 'unknown'
- `setTerminalFocused` - Function to update terminal focus state
- `getTerminalFocused` - Function to check if terminal is focused
- `getTerminalFocusState` - Function to get raw focus state value
- `subscribeTerminalFocus` - Function to subscribe to focus changes (returns unsubscribe)
- `resetTerminalFocusState` - Function to reset focus state to 'unknown'