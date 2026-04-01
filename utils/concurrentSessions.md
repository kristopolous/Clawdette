# concurrentSessions

## Purpose
ENOENT is fine (already deleted or never written)

## Imports
- **Stdlib**: bun:bundle, fs/promises, path
- **Internal**: ./cleanupRegistry.js, ./debug.js, ./envUtils.js, ./errors.js, ./genericProcessUtils.js, ./platform.js, ./slowOperations.js, ./teammate.js

## Items

### getSessionsDir
**Type**: Function

### envSessionKind
**Type**: Function

### isBgSession
**Type**: Function

### registerSession
**Type**: Function

### updatePidFile
**Type**: Function

### updateSessionName
**Type**: Function

### updateSessionBridgeId
**Type**: Function

### updateSessionActivity
**Type**: Function

### countConcurrentSessions
**Type**: Function

### SessionKind
**Type**: Type alias

### SessionStatus
**Type**: Type alias

## Exports
- SessionKind
- SessionStatus
- isBgSession
- registerSession
- updateSessionName
- updateSessionBridgeId
- updateSessionActivity
- countConcurrentSessions

## Source
`concurrentSessions.ts`