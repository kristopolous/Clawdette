# types

## Purpose
Defines types and constants for the buddy (companion) system including species, rarities, stats, and appearance options.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: (none)

## Logic
1. Species encoded via `String.fromCharCode` to avoid bundle canary collisions
2. 18 species: duck, goose, blob, cat, dragon, octopus, owl, penguin, turtle, snail, ghost, axolotl, capybara, cactus, robot, rabbit, mushroom, chonk
3. 5 rarities: common, uncommon, rare, epic, legendary (with weights)
4. 6 eye types: ·, ✦, ×, ◉, @, °
5. 8 hats: none, crown, tophat, propeller, halo, wizard, beanie, tinyduck
6. 5 stats: DEBUGGING, PATIENCE, CHAOS, WISDOM, SNARK
7. Rarity colors for UI display
8. Companion type combines bones (deterministic) with soul (stored)

## Exports
- `RARITIES`, `Rarity` - rarity tiers
- `SPECIES`, `Species` - species list (obfuscated to avoid canary collision)
- `EYES`, `Eye` - eye types
- `HATS`, `Hat` - hat options
- `STAT_NAMES`, `StatName` - stat categories
- `RARITY_WEIGHTS` - rarity roll weights
- `RARITY_COLORS` - UI colors per rarity
- `Companion`, `CompanionBones`, `CompanionSoul` - companion types
