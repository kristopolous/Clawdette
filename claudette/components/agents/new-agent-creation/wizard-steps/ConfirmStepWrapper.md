## Purpose
Wraps the confirmation step with agent saving, state management, and analytics logging logic.

## Imports
- **External**: chalk, react, react/compiler-runtime, useCallback, useState
- **Internal**: src/services/analytics/index.js (logEvent, AnalyticsMetadata type), src/state/AppState.js (useSetAppState), Tool.js (Tools type), tools/AgentTool/loadAgentsDir.js (AgentDefinition type, getActiveAgentsFromList), utils/promptEditor.js (editFileInEditor), wizard/index.js (useWizard), agentFileUtils.js (getNewAgentFilePath, saveAgentToFile), types.js (AgentWizardData type), ConfirmStep.js (ConfirmStep)

## Logic
Handles the complete agent save workflow: persists the agent to file, updates application state with the new agent, optionally opens the file in an external editor, and logs analytics events. Provides save and save-and-edit callbacks to the ConfirmStep component.

## Exports
- `ConfirmStepWrapper` - wraps ConfirmStep with save logic, state updates, and analytics tracking
