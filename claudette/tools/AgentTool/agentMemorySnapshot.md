# tools/AgentTool/agentMemorySnapshot

## Purpose
Manages agent memory snapshot persistence and synchronization.

## Imports
- **Stdlib**: `fs/promises`, `path`
- **External**: `zod/v4`
- **Internal**: cwd, debug, lazySchema, JSON utils, agentMemory

## Logic
1. Defines constants: SNAPSHOT_BASE, SNAPSHOT_JSON, SYNCED_JSON
2. Creates Zod schemas: snapshotMetaSchema, syncedMetaSchema
3. `getSnapshotDirForAgent` - returns snapshot directory path for agent
4. `readJsonFile` - reads and validates JSON with schema (internal helper)
5. `copySnapshotToLocal` - copies snapshot files to local memory, skips SNAPSHOT_JSON
6. `saveSyncedMeta` - saves sync tracking metadata (internal helper)
7. `checkAgentMemorySnapshot` - checks if snapshot exists and is newer than local
8. `initializeFromSnapshot` - initializes local memory from snapshot (first-time)
9. `replaceFromSnapshot` - replaces local memory with snapshot (force update)
10. `markSnapshotSynced` - updates sync metadata without changing files

## Exports
- `getSnapshotDirForAgent` - gets snapshot directory for agent
- `checkAgentMemorySnapshot` - checks if sync needed
- `initializeFromSnapshot` - initializes local memory from snapshot
- `replaceFromSnapshot` - replaces local memory with snapshot
- `markSnapshotSynced` - marks snapshot as synced
