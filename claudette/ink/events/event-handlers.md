# ink/events/event-handlers

## Purpose
Provides event handler types and mappings for terminal events.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: events click-event/focus-event/keyboard-event/paste-event/resize-event

## Logic
1. `KeyboardEventHandler` - (event: KeyboardEvent) => void
2. `FocusEventHandler` - (event: FocusEvent) => void
3. `PasteEventHandler` - (event: PasteEvent) => void
4. `ResizeEventHandler` - (event: ResizeEvent) => void
5. `ClickEventHandler` - (event: ClickEvent) => void
6. `HoverEventHandler` - () => void
7. `EventHandlerProps` - props for event handlers on Box and host components
8. Follows React/DOM naming convention: onEventName for bubble phase, onEventNameCapture for capture phase
9. Includes: onKeyDown, onKeyDownCapture, onFocus, onFocusCapture, onBlur, onBlurCapture, onPaste, onPasteCapture, onResize, onClick, onMouseEnter, onMouseLeave
10. `HANDLER_FOR_EVENT` - reverse lookup: event type string → handler prop names
11. Used by dispatcher for O(1) handler lookup per node
12. Maps: keydown, focus, blur, paste, resize, click to handler props
13. `EVENT_HANDLER_PROPS` - Set of all event handler prop names
14. Used by reconciler to detect event props and store in _eventHandlers instead of attributes

## Exports
- `KeyboardEventHandler` - keyboard event handler type
- `FocusEventHandler` - focus event handler type
- `PasteEventHandler` - paste event handler type
- `ResizeEventHandler` - resize event handler type
- `ClickEventHandler` - click event handler type
- `HoverEventHandler` - hover event handler type
- `EventHandlerProps` - event handler props type
- `HANDLER_FOR_EVENT` - handler for event mapping
- `EVENT_HANDLER_PROPS` - event handler props set
