# utils/memoryFileDetection

## Purpose
Provides memory file detection utilities for session-related files.

## Imports
- **Stdlib**: `path`
- **External**: `bun:bundle`
- **Internal**: memdir paths, AgentTool agentMemory, envUtils, windowsPaths

## Logic
1. `IS_WINDOWS` - checks if running on Windows
2. `toPosix` - normalizes path separators to posix (/)
3. `toComparable` - converts to stable string-comparable form
4. On Windows: lowercases for case-insensitive comparison
5. `detectSessionFileType` - detects session file type from path
6. Returns 'session_memory' for ~/.claude/session-memory/*.md files
7. Returns 'session_transcript' for ~/.claude/projects/*.jsonl files
8. Returns null if not a session file
9. `detectSessionPatternType` - detects session pattern from glob
10. Used for Grep/Glob tools checking patterns, not actual paths
11. `isSessionFileAccess` - checks if file access targets session files
12. `isShellCommandTargetingMemory` - checks if shell command targets memory
13. `isAutoManagedMemoryFile` - checks if file is auto-managed memory
14. `isAutoManagedMemoryPattern` - checks if pattern targets auto-managed memory
15. `isMemoryDirectory` - checks if path is memory directory
16. TEAMMEM feature-gated team memory support

## Exports
- `detectSessionFileType` - detects session file type
- `detectSessionPatternType` - detects session pattern type
- `isSessionFileAccess` - checks session file access
- `isShellCommandTargetingMemory` - checks shell targeting memory
- `isAutoManagedMemoryFile` - checks auto-managed memory file
- `isAutoManagedMemoryPattern` - checks auto-managed pattern
- `isMemoryDirectory` - checks memory directory
