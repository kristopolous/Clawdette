# AppStateStore.ts

## Purpose
Defines the centralized application state structure (`AppState`) and the default state factory function. This is the single source of truth for all UI and application state in the Claude Code application.

## Imports
- **Stdlib**: `vm` (for REPL VM context)
- **External**: None (all imports are internal type definitions)
- **Internal**:
  - `Notification` from `src/context/notifications.js`
  - `TodoList` from `src/utils/todo/types.js`
  - `BridgePermissionCallbacks` from `src/bridge/bridgePermissionCallbacks.js`
  - `Command` from `src/commands.js`
  - `ChannelPermissionCallbacks` from `src/services/mcp/channelPermissions.js`
  - `ElicitationRequestEvent` from `src/services/mcp/elicitationHandler.js`
  - `MCPServerConnection`, `ServerResource` from `src/services/mcp/types.js`
  - `Tool`, `ToolPermissionContext`, `getEmptyToolPermissionContext` from `src/Tool.js`
  - `TaskState` from `src/tasks/types.js`
  - `AgentDefinitionsResult` from `src/tools/AgentTool/loadAgentsDir.js`
  - `AllowedPrompt` from `src/tools/ExitModeTool/ExitPlanModeV2Tool.js`
  - `AgentId` from `src/types/ids.js`
  - `Message`, `UserMessage` from `src/types/message.js`
  - `LoadedPlugin`, `PluginError` from `src/types/plugin.js`
  - `DeepImmutable` from `src/types/utils.js`
  - `AttributionState`, `createEmptyAttributionState` from `src/utils/commitAttribution.js`
  - `EffortValue` from `src/utils/effort.js`
  - `FileHistoryState` from `src/utils/fileHistory.js`
  - `REPLHookContext` from `src/utils/hooks/postSamplingHooks.js`
  - `SessionHooksState` from `src/utils/hooks/sessionHooks.js`
  - `ModelSetting` from `src/utils/model/model.js`
  - `DenialTrackingState` from `src/utils/permissions/denialTracking.js`
  - `PermissionMode` from `src/utils/permissions/PermissionMode.js`
  - `getInitialSettings`, `SettingsJson` from `src/utils/settings/`
  - `shouldEnableThinkingByDefault` from `src/utils/thinking.js`
  - `shouldEnablePromptSuggestion` from `src/services/PromptSuggestion/promptSuggestion.js`
  - `AgentColorName` from `src/tools/AgentTool/agentColorManager.js`
  - `Store` from `src/state/store.js`

## Logic
The module defines:

1. **CompletionBoundary** - Discriminated union representing why a completion ended:
   - `complete` - Normal completion with tokens and timestamp
   - `bash` - Bash command completion
   - `edit` - File edit tool completion
   - `denied_tool` - Tool was denied permission

2. **SpeculationResult** - Result of a speculative execution
   - `messages` - Resulting messages
   - `boundary` - How completion ended
   - `timeSavedMs` - Performance metric

3. **SpeculationState** - State of speculative execution:
   - `idle` - No speculation running
   - `active` - Running with id, abort function, refs, metrics

4. **FooterItem** - Possible footer selections: `tasks`, `tmux`, `bagel`, `teams`, `bridge`, `companion`

5. **AppState** - The main application state object containing:
   - Settings and UI state (settings, verbose, model selection, view modes)
   - Task management (tasks map, foregrounded task, viewed agent)
   - MCP/Plugin state (clients, tools, commands, resources)
   - Session state (notifications, elicitation, thinking, prompt suggestions)
   - Tool integrations (tmux/tungsten, web browser/bagel, computer use MCP)
   - REPL context (VM context, registered tools, console)
   - Team/swarm context (team info, teammates, standalone agent)
   - Permission state (worker sandbox, channel permissions)
   - Remote/hybrid features (ultraplan, remote session, always-on bridge)

6. **getDefaultAppState()** - Factory function that creates initial state:
   - Determines initial permission mode based on whether running as teammate with plan mode required
   - Returns fully initialized state object with all default values

## Exports
- `CompletionBoundary` - Type for completion boundary states
- `SpeculationResult` - Type for speculation results
- `SpeculationState` - Type for speculation state (idle or active)
- `IDLE_SPECULATION_STATE` - Constant for idle speculation
- `FooterItem` - Type for footer selection options
- `AppState` - The main application state type
- `AppStateStore` - Type alias for `Store<AppState>`
- `getDefaultAppState()` - Returns the default initial application state
