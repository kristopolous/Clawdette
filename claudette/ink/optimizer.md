# ink/optimizer

## Purpose
Optimizes diff by applying rules to reduce terminal patches.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: ink frame

## Logic
1. `optimize` - optimizes diff by applying rules in single pass
2. Reduces number of patches written to terminal
3. Returns diff unchanged if length <= 1
4. Rules applied:
   - Remove empty stdout patches
   - Merge consecutive cursorMove patches (adds x,y offsets)
   - Remove no-op cursorMove (0,0) patches
   - Concat adjacent style patches (transition diffs - can't drop either)
   - Dropping first style is only sound if undo-codes subset of second's
   - e.g. [\e[49m, \e[2m]: dropping bg reset leaks into next \e[2J/\e[2K via BCE
   - Dedupe consecutive hyperlinks with same URI
   - Cancel cursor hide/show pairs
   - Remove clear patches with count 0
   - Collapse consecutive cursorTo (only last one matters)
5. Skips no-ops: empty stdout, cursorMove (0,0), clear count 0
6. Merges consecutive cursorMove by adding x,y offsets
7. Collapses consecutive cursorTo (replaces with last)
8. Concats adjacent style patches (styleStr is transition diff)
9. Dedupes hyperlinks with same URI
10. Cancels cursor hide/show pairs (pops last, decrements len)
11. `Diff` - diff type

## Exports
- `optimize` - optimizes diff
