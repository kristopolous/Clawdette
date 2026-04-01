# ink/events/terminal-event

## Purpose
Provides TerminalEvent base class for all terminal events with DOM-style propagation.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: events event

## Logic
1. `EventPhase` - 'none' | 'capturing' | 'at_target' | 'bubbling'
2. `TerminalEventInit` - { bubbles?, cancelable? }
3. `TerminalEvent` - extends Event
4. Mirrors browser's Event API: target, currentTarget, eventPhase, stopPropagation(), preventDefault(), timeStamp
5. `type` - event type string
6. `timeStamp` - performance.now() timestamp
7. `bubbles` - whether event bubbles (default true)
8. `cancelable` - whether event is cancelable (default true)
9. `_target` - event target
10. `_currentTarget` - current event target during propagation
11. `_eventPhase` - current event phase
12. `_propagationStopped` - whether propagation stopped
13. `_defaultPrevented` - whether default prevented
14. `target` getter - returns _target
15. `currentTarget` getter - returns _currentTarget
16. `eventPhase` getter - returns _eventPhase
17. `defaultPrevented` getter - returns _defaultPrevented
18. `stopPropagation` - sets _propagationStopped to true
19. `stopImmediatePropagation` - calls super and sets _propagationStopped
20. `preventDefault` - sets _defaultPrevented if cancelable
21. `_setTarget` - internal setter for target
22. `_setCurrentTarget` - internal setter for currentTarget
23. Extends Event so existing event types share common ancestor
24. Can migrate existing event types (ClickEvent, InputEvent, TerminalFocusEvent) later

## Exports
- `EventPhase` - event phase type
- `TerminalEventInit` - event init type
- `TerminalEvent` - terminal event class
