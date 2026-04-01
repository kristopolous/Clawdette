# sprites

## Purpose
Defines ASCII sprite frames for all companion species with animation support.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: buddy types (species, eyes, hats)

## Logic
1. Each sprite is 5 lines tall, 12 wide (after {E}→eye char substitution)
2. Multiple frames per species for idle fidget animation (typically 3 frames)
3. Line 0 is hat slot - blank in frames 0-1, may use it in frame 2
4. {E} placeholder replaced with actual eye character at render time
5. Species include: duck, goose, blob, cat, dragon, octopus, owl, penguin, turtle, snail, ghost, axolotl, capybara, cactus, robot, rabbit, mushroom, chonk

## Exports
- `BODIES` - record mapping species to sprite frame arrays
- `HATS` - hat sprite definitions (crown, tophat, propeller, halo, wizard, beanie, tinyduck)
- `renderSprite` - renders sprite with given bones (species, eyes, hat)
- `renderFace` - renders face with expression
- `spriteFrameCount` - returns number of frames for a species
