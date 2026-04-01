# utils/memoize

## Purpose
Provides memoization utilities with TTL and LRU caching.

## Imports
- **Stdlib**: (none)
- **External**: `lru-cache`
- **Internal**: log, JSON utils

## Logic
1. `CacheEntry<T>` - { value, timestamp, refreshing }
2. `MemoizedFunction` - memoized function with cache interface
3. `LRUMemoizedFunction` - LRU memoized function with extended cache interface
4. `memoizeWithTTL` - creates memoized function with time-to-live
5. Default TTL: 5 minutes
6. Returns stale value while refreshing in background
7. Prevents multiple parallel refreshes via refreshing flag
8. Uses jsonStringify for cache key generation
9. `memoizeWithLRU` - creates LRU memoized function
10. Configurable max entries (default 100)
11. Uses LRUCache for bounded memory usage
12. `memoizeWithLRUAndTTL` - combines LRU with TTL
13. `createMemoizedFunction` - creates custom memoized function
14. Cache interfaces: clear, size, delete, get, has methods

## Exports
- `CacheEntry` - cache entry type
- `MemoizedFunction` - memoized function type
- `LRUMemoizedFunction` - LRU memoized function type
- `memoizeWithTTL` - TTL memoization
- `memoizeWithLRU` - LRU memoization
- `memoizeWithLRUAndTTL` - LRU + TTL memoization
- `createMemoizedFunction` - creates custom memoized function
