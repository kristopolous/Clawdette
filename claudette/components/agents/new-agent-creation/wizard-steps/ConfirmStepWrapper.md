## Purpose
Wrapper component that handles agent saving and file operations for the confirmation step.

## Imports
- **External**: chalk, react (useCallback, useState)
- **Internal**: analytics services, app state utilities, Tool types, AgentDefinition types, prompt editor utilities, wizard utilities, agent file utilities, ConfirmStep component, AgentWizardData types

## Logic
Provides save and save-and-edit handlers that persist the agent configuration to file, update application state with the new agent, log analytics events, and optionally open the file in an editor. Wraps ConfirmStep with error handling for save operations.

## Exports
- `ConfirmStepWrapper` - renders the confirmation step with save functionality and error handling
