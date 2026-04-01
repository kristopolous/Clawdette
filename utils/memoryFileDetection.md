# memoryFileDetection

## Purpose
Normalize path separators to posix (/). Does NOT translate drive encoding.

## Imports
- **Stdlib**: bun:bundle, path
- **Internal**: ../tools/AgentTool/agentMemory.js, ./envUtils.js

## Items

### toPosix
**Type**: Function

### toComparable
**Type**: Function

### detectSessionFileType
**Type**: Function

### detectSessionPatternType
**Type**: Function

### isAutoMemFile
**Type**: Function

### memoryScopeForPath
**Type**: Function

### isAgentMemFile
**Type**: Function

### isAutoManagedMemoryFile
**Type**: Function

### isMemoryDirectory
**Type**: Function

### isShellCommandTargetingMemory
**Type**: Function

### isAutoManagedMemoryPattern
**Type**: Function

### MemoryScope
**Type**: Type alias

## Exports
- detectSessionFileType
- detectSessionPatternType
- isAutoMemFile
- MemoryScope
- memoryScopeForPath
- isAutoManagedMemoryFile
- isMemoryDirectory
- isShellCommandTargetingMemory
- isAutoManagedMemoryPattern

## Source
`memoryFileDetection.ts`