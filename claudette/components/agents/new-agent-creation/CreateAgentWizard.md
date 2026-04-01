## Purpose
Orchestrates the multi-step wizard for creating a new agent.

## Imports
- **External**: react, react/compiler-runtime
- **Internal**: memdir/paths.js (isAutoMemoryEnabled), Tool.js (Tools type), tools/AgentTool/loadAgentsDir.js (AgentDefinition type), wizard/index.js (WizardProvider), wizard/types.js (WizardStepComponent type), wizard-steps/ColorStep.js, wizard-steps/ConfirmStepWrapper.js, wizard-steps/DescriptionStep.js, wizard-steps/GenerateStep.js, wizard-steps/LocationStep.js, wizard-steps/MemoryStep.js, wizard-steps/MethodStep.js, wizard-steps/ModelStep.js, wizard-steps/PromptStep.js, wizard-steps/ToolsStep.js, wizard-steps/TypeStep.js, types.js (AgentWizardData type)

## Logic
Assembles the ordered sequence of wizard steps based on configuration and memory settings. Conditionally includes the MemoryStep when auto-memory is enabled. Wraps all steps in a WizardProvider with initial data and completion/cancellation handlers.

## Exports
- `CreateAgentWizard` - renders the complete agent creation wizard with all configured steps
