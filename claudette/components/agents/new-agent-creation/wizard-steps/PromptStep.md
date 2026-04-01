## Purpose
Wizard step for entering the agent system prompt.

## Imports
- **External**: react (useCallback, useState)
- **Internal**: ink components (Box, Text), keybinding utilities, prompt editor utilities (editPromptInEditor), configurable shortcut hints, design system components, TextInput component, wizard utilities, AgentWizardData types

## Logic
Provides a text input for entering the system prompt with validation (required field, minimum length). Supports external editor integration via keybinding. Displays error state for empty input and guidance text for best results.

## Exports
- `PromptStep` - renders a text input dialog for entering the agent system prompt
