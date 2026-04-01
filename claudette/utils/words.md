# utils/words

## Purpose
Provides random word slug generator for plan IDs.

## Imports
- **Stdlib**: `crypto`
- **External**: (none)
- **Internal**: (none)

## Logic
1. Inspired by https://github.com/nas5w/random-word-slugs with Claude-flavored words
2. `ADJECTIVES` - array of whimsical and delightful adjectives
3. Includes: abundant, ancient, bright, calm, cheerful, clever, cozy, curious, dapper, dazzling, deep, delightful, eager, elegant, enchanted, fancy, fluffy, gentle, gleaming, golden, graceful, happy, hidden, humble, jolly, joyful, keen, kind, lively, lovely, lucky, luminous, magical, majestic, mellow, merry, mighty, misty, noble, peaceful, playful, polished, precious, proud, quiet, quirky, radiant, rosy, serene, shiny, silly, sleepy, smooth, snazzy, snug, snuggly, soft, sparkling, spicy, splendid, sprightly, starry, steady, sunny, swift, tender, tidy, toasty, tranquil, twinkly, etc.
4. `NOUNS` - array of nouns for slug generation
5. `generateWordSlug` - generates random word slug
6. Uses randomBytes for cryptographically secure randomness
7. Combines random adjective + noun
8. `getRandomAdjective` - gets random adjective
9. `getRandomNoun` - gets random noun
10. `getRandomBytes` - gets random bytes
11. `randomBytes` - crypto random bytes

## Exports
- `ADJECTIVES` - adjectives array
- `NOUNS` - nouns array
- `generateWordSlug` - generates word slug
- `getRandomAdjective` - gets random adjective
- `getRandomNoun` - gets random noun
