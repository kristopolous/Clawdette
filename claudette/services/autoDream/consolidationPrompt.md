# autoDream/consolidationPrompt

## Purpose
Builds the consolidation prompt for dream/memory consolidation operations.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: memdir constants (DIR_EXISTS_GUIDANCE, ENTRYPOINT_NAME, MAX_ENTRYPOINT_LINES)

## Logic
1. `buildConsolidationPrompt` - main function taking memoryRoot, transcriptDir, extra context
2. Phase 1 (Orient): ls memory dir, read entrypoint, skim existing topic files, review logs/sessions subdirs
3. Phase 2 (Gather): sources in priority order - daily logs, drifted memories, targeted transcript grep
4. Emphasizes narrow grep over exhaustive reading
5. Phase 3 (Consolidate): write/update memory files using auto-memory format conventions
6. Focus: merge into existing files, convert relative to absolute dates, delete contradicted facts
7. Phase 4 (Prune and index): update entrypoint under line/size limits
8. Entry format: one line under ~150 chars: `- [Title](file.md) — one-line hook`
9. Remove stale/wrong/superseded pointers, demote verbose entries, resolve contradictions
10. Returns brief summary of changes

## Exports
- `buildConsolidationPrompt` - builds consolidation prompt for dream operation
