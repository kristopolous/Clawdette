# flushGate

## Purpose
Implements a state machine for gating message writes during an initial flush, preventing new messages from interleaving with historical replay.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: (none)

## Logic
1. Maintains `_active` flag and `_pending` queue for generic type T
2. `start()` - marks flush as in-progress, enabling enqueue queuing
3. `end()` - ends flush and returns queued items for draining
4. `enqueue()` - queues items if active (returns true), otherwise returns false for direct send
5. `drop()` - discards queued items on permanent transport close, returns count
6. `deactivate()` - clears active flag without dropping (used on transport replacement)

## Exports
- `FlushGate<T>` - generic class implementing the flush gate state machine
