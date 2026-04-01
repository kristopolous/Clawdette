## Purpose
Wizard step for generating agent configuration using an inference provider.

## Imports
- **External**: @anthropic-ai/sdk (APIUserAbortError), react (useCallback, useRef, useState)
- **Internal**: useMainLoopModel hook, ink components (Box, Text), keybinding utilities, abort controller utilities, prompt editor utilities, configurable shortcut hints, design system components, Spinner component, TextInput component, wizard utilities, generateAgent function, AgentWizardData types

## Logic
Provides a text input for describing the desired agent, then calls the inference provider to generate a complete agent configuration (identifier, whenToUse, systemPrompt). Supports generation cancellation, external editor integration, and error handling. On success, populates wizard data and skips to the ToolsStep.

## Exports
- `GenerateStep` - renders an AI-powered agent generation interface with prompt input and loading state
