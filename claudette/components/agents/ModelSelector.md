## Purpose
Provides a component for selecting an inference model from available options.

## Imports
- **External**: react
- **Internal**: ink components (Box, Text), model utilities (getAgentModelOptions), custom select component

## Logic
Retrieves available model options and handles the case where the initial model is a custom ID not in the default list by prepending it as an option. Renders a select component with model descriptions and a default selection.

## Exports
- `ModelSelector` - renders a model selection UI with available options and custom model support
