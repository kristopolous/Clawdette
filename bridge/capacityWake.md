# capacityWake

## Purpose
Provides a shared capacity-wake primitive for bridge poll loops, enabling early wake from at-capacity sleeps when capacity frees up or shutdown occurs.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: (none)

## Logic
1. `createCapacityWake` - factory that creates a wake controller merged with an outer abort signal
2. Maintains a mutable `wakeController` that can be aborted and recreated on each wake
3. `signal()` - creates a merged AbortSignal that fires on either outer signal abort or capacity wake
4. `wake()` - aborts current sleep and arms fresh controller for immediate re-check
5. Cleanup function removes event listeners when sleep resolves normally (without abort)

## Exports
- `CapacitySignal` - type for merged signal with cleanup function
- `CapacityWake` - interface with signal() and wake() methods
- `createCapacityWake` - factory function creating the capacity wake controller
