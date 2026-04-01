# utils/hash

## Purpose
Provides hash utilities for change detection and cache keys.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: (none)

## Logic
1. `djb2Hash` - fast non-cryptographic hash (signed 32-bit int)
2. Deterministic across runtimes (unlike Bun.hash which uses wyhash)
3. Used as fallback when Bun.hash unavailable
4. Used for on-disk-stable output (cache directory names)
5. Algorithm: hash = ((hash << 5) - hash + charCode) | 0
6. `hashContent` - hashes content for change detection
7. Bun.hash is ~100x faster than sha256
8. Collision-resistant enough for diff detection (not crypto-safe)
9. Falls back to crypto.createHash('sha256') when Bun unavailable
10. `hashPair` - hashes two strings without concatenating
11. Bun path: seed-chains wyhash (hash(a) feeds as seed to hash(b))
12. Node path: incremental SHA-256 update with null separator
13. Naturally disambiguates ("ts","code") vs ("tsc","ode")

## Exports
- `djb2Hash` - djb2 hash function
- `hashContent` - hashes content for change detection
- `hashPair` - hashes string pair without concatenation
