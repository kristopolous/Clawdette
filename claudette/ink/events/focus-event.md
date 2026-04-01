# ink/events/focus-event

## Purpose
Provides FocusEvent class for component focus changes.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: events terminal-event

## Logic
1. `FocusEvent` - extends TerminalEvent
2. Dispatched when focus moves between elements
3. 'focus' fires on newly focused element
4. 'blur' fires on previously focused element
5. Both bubble, matching react-dom's focusin/focusout semantics
6. Parent components can observe descendant focus changes
7. `relatedTarget` - the related event target (null if none)
8. Constructor takes type ('focus' | 'blur') and relatedTarget
9. Calls super with bubbles: true, cancelable: false
10. `TerminalEvent` - terminal event base class
11. `EventTarget` - event target type

## Exports
- `FocusEvent` - focus event class
