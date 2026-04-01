# teamHelpers

## Purpose
Output types for different operations

## Imports
- **Stdlib**: fs, fs/promises, path, zod/v4
- **Internal**: ../../bootstrap/state.js, ../debug.js, ../envUtils.js, ../errors.js, ../execFileNoThrow.js, ../git.js, ../lazySchema.js, ../permissions/PermissionMode.js, ../slowOperations.js, ../tasks.js...

## Items

### sanitizeName
**Type**: Function

### sanitizeAgentName
**Type**: Function

### getTeamDir
**Type**: Function

### getTeamFilePath
**Type**: Function

### readTeamFile
**Type**: Function

### readTeamFileAsync
**Type**: Function

### writeTeamFile
**Type**: Function

### writeTeamFileAsync
**Type**: Function

### removeTeammateFromTeamFile
**Type**: Function

### addHiddenPaneId
**Type**: Function

### removeHiddenPaneId
**Type**: Function

### removeMemberFromTeam
**Type**: Function

### removeMemberByAgentId
**Type**: Function

### setMemberMode
**Type**: Function

### syncTeammateMode
**Type**: Function

### setMultipleMemberModes
**Type**: Function

### setMemberActive
**Type**: Function

### destroyWorktree
**Type**: Function

### registerTeamForSessionCleanup
**Type**: Function

### unregisterTeamForSessionCleanup
**Type**: Function

### cleanupSessionTeams
**Type**: Function

### killOrphanedTeammatePanes
**Type**: Function

### cleanupTeamDirectories
**Type**: Function

### SpawnTeamOutput
**Type**: Type alias

### CleanupOutput
**Type**: Type alias

### TeamAllowedPath
**Type**: Type alias

### TeamFile
**Type**: Type alias

### Input
**Type**: Type alias

### Output
**Type**: Type alias

## Exports
- inputSchema
- SpawnTeamOutput
- CleanupOutput
- TeamAllowedPath
- TeamFile
- Input
- Output
- sanitizeName
- sanitizeAgentName
- getTeamDir
- getTeamFilePath
- readTeamFile
- readTeamFileAsync
- writeTeamFileAsync
- removeTeammateFromTeamFile
- addHiddenPaneId
- removeHiddenPaneId
- removeMemberFromTeam
- removeMemberByAgentId
- setMemberMode
- syncTeammateMode
- setMultipleMemberModes
- setMemberActive
- registerTeamForSessionCleanup
- unregisterTeamForSessionCleanup
- cleanupSessionTeams
- cleanupTeamDirectories

## Source
`teamHelpers.ts`