# forkedAgent

## Purpose
Slot written by handleStopHooks after each turn so post-turn forks

## Imports
- **Stdlib**: crypto, crypto
- **Internal**: ../commands, ./constants/querySource, ./hooks/useCanUseTool, ./query, ./services/api/claude, ./services/api/logging, ./Tool, ../tools/AgentTool/loadAgentsDir, ../types/ids, ../types/message...

## Items

### saveCacheSafeParams
**Type**: Function

### getLastCacheSafeParams
**Type**: Function

### createCacheSafeParams
**Type**: Function

### createGetAppStateWithAllowedTools
**Type**: Function

### prepareForkedCommandContext
**Type**: Function

### extractResultText
**Type**: Function

### createSubagentContext
**Type**: Function

### runForkedAgent
**Type**: Function

### logForkAgentQueryEvent
**Type**: Function

### CacheSafeParams
**Type**: Type alias

### ForkedAgentParams
**Type**: Type alias

### ForkedAgentResult
**Type**: Type alias

### PreparedForkedContext
**Type**: Type alias

### SubagentContextOverrides
**Type**: Type alias

## Exports
- CacheSafeParams
- saveCacheSafeParams
- getLastCacheSafeParams
- ForkedAgentParams
- ForkedAgentResult
- createCacheSafeParams
- createGetAppStateWithAllowedTools
- PreparedForkedContext
- prepareForkedCommandContext
- extractResultText
- SubagentContextOverrides
- createSubagentContext
- runForkedAgent

## Source
`forkedAgent.ts`