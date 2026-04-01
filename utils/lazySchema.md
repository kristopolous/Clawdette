# utils/lazySchema

## Purpose
Provides lazy schema factory for deferring Zod schema construction.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: (none)

## Logic
1. `lazySchema` - returns memoized factory function
2. Constructs value on first call, caches result
3. Defers Zod schema construction from module init to first access
4. Prevents circular dependency issues with schema imports
5. Uses `??=` operator for memoization
6. Returns cached value on subsequent calls

## Exports
- `lazySchema` - lazy schema factory function
