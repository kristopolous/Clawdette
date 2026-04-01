# companion

## Purpose
Provides deterministic companion (buddy) generation with seeded RNG for species, rarity, stats, and appearance.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: config utils, buddy types

## Logic
1. `mulberry32` - tiny seeded PRNG for deterministic rolls
2. `hashString` - hashes user ID (Bun.hash or FNV-1a fallback)
3. `rollRarity` - weighted rarity roll (common/uncommon/rare/epic/legendary)
4. `rollStats` - generates 5 stats with one peak, one dump, rest scattered; rarity sets floor
5. `roll` - cached deterministic roll from userId hash
6. `rollWithSeed` - roll with explicit seed string
7. `getCompanion` - merges stored soul with freshly rolled bones (stored fields never override rarity)

## Exports
- `Roll` - type with bones and inspirationSeed
- `roll` - cached deterministic companion roll from userId
- `rollWithSeed` - roll with explicit seed
- `companionUserId` - gets user ID from config (oauthAccount or userID)
- `getCompanion` - gets companion with merged stored/fresh data
