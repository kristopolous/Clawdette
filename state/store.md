# store.ts

## Purpose
A minimal, generic state store implementation with subscription support. Provides reactive state management with change listeners and immutable update patterns.

## Imports
- **Stdlib**: None
- **External**: None
- **Internal**: None

## Logic
The `createStore` function implements a simple reactive store pattern:

1. Initializes state with a provided initial value
2. Maintains a `Set` of listener callbacks
3. `setState` accepts an updater function that receives the previous state and returns new state
4. Uses `Object.is` for equality checking to prevent updates when state hasn't changed
5. On state change, calls the optional `onChange` callback with `{ newState, oldState }`
6. Notifies all subscribed listeners after state update
7. `subscribe` returns an unsubscribe function that removes the listener

## Exports
- `Store<T>` - Type representing a store instance with `getState`, `setState`, and `subscribe` methods
- `createStore<T>` - Factory function to create a store instance with optional `onChange` callback
