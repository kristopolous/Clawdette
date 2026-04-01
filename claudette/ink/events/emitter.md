## Purpose
Provides an EventEmitter class that extendsNode's built-in EventEmitter with awareness of Ink's custom Event class, ensuring that stopImmediatePropagation() is respected during event emission.

## Imports
- **Stdlib**: None specified
- **External**: EventEmitter as NodeEventEmitter from 'events'
- **Internal**: Event base class from ./event

## Logic
1. **Inheritance**: ExtendsNode's built-in EventEmitter class
2. **Constructor**: 
   - Calls super() to initialize the parent EventEmitter
   - Disables the default maxListeners warning by setting it to 0 (unlimited listeners)
   - This is important in React applications where many components can legitimately listen to the same event (e.g., useInput hooks)
3. **override emit() Method**:
   - Special handling for 'error' events: delegates directly to parent emitter since error events are not treated like normal events
   - For all other events:
     * Gets raw listeners for the event type
     * Returns false if no listeners exist
     * Checks if the first argument is an instance of Ink's Event class
     * Iterates through all listeners, calling each with the provided arguments
     * If any listener calls stopImmediatePropagation() on the event, breaks out of the loop early
     * Returns true to indicate the event was emitted (regardless of whether listeners existed)

## Exports
- `EventEmitter` - Class extendingNode EventEmitter with Ink Event awareness