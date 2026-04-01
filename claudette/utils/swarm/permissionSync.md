# permissionSync

## Purpose
Create a directory-level lock file for atomic writes

## Imports
- **Stdlib**: fs/promises, path, zod/v4
- **Internal**: ../debug.js, ../errors.js, ../lazySchema.js, ../lockfile.js, ../log.js, ../permissions/PermissionUpdateSchema.js, ../slowOperations.js, ./teamHelpers

## Items

### getPermissionDir
**Type**: Function

### getPendingDir
**Type**: Function

### getResolvedDir
**Type**: Function

### ensurePermissionDirsAsync
**Type**: Function

### getPendingRequestPath
**Type**: Function

### getResolvedRequestPath
**Type**: Function

### generateRequestId
**Type**: Function

### createPermissionRequest
**Type**: Function

### writePermissionRequest
**Type**: Function

### readPendingPermissions
**Type**: Function

### readResolvedPermission
**Type**: Function

### resolvePermission
**Type**: Function

### cleanupOldResolutions
**Type**: Function

### pollForResponse
**Type**: Function

### removeWorkerResponse
**Type**: Function

### isTeamLeader
**Type**: Function

### isSwarmWorker
**Type**: Function

### deleteResolvedPermission
**Type**: Function

### getLeaderName
**Type**: Function

### sendPermissionRequestViaMailbox
**Type**: Function

### sendPermissionResponseViaMailbox
**Type**: Function

### generateSandboxRequestId
**Type**: Function

### sendSandboxPermissionRequestViaMailbox
**Type**: Function

### sendSandboxPermissionResponseViaMailbox
**Type**: Function

### SwarmPermissionRequest
**Type**: Type alias

### PermissionResolution
**Type**: Type alias

### PermissionResponse
**Type**: Type alias

## Exports
- SwarmPermissionRequestSchema
- SwarmPermissionRequest
- PermissionResolution
- getPermissionDir
- generateRequestId
- createPermissionRequest
- writePermissionRequest
- readPendingPermissions
- readResolvedPermission
- resolvePermission
- cleanupOldResolutions
- PermissionResponse
- pollForResponse
- removeWorkerResponse
- isTeamLeader
- isSwarmWorker
- deleteResolvedPermission
- submitPermissionRequest
- getLeaderName
- sendPermissionRequestViaMailbox
- sendPermissionResponseViaMailbox
- generateSandboxRequestId
- sendSandboxPermissionRequestViaMailbox
- sendSandboxPermissionResponseViaMailbox

## Source
`permissionSync.ts`