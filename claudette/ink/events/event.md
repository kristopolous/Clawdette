# ink/events/event

## Purpose
Provides base Event class with propagation control.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: (none)

## Logic
1. `Event` - base event class
2. `_didStopImmediatePropagation` - private flag for propagation state
3. `didStopImmediatePropagation` - returns propagation stopped state
4. `stopImmediatePropagation` - sets propagation stopped flag to true
5. Used by EventEmitter to stop listener iteration
6. Similar to DOM Event API

## Exports
- `Event` - base event class
