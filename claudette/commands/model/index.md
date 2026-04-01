# Model Command Definition (`index`)

## Purpose
Defines the `model` command, which sets or displays the AI model used by Claudette. The command can be immediate (executed without enter) depending on user configuration.

## Imports
### Internal
- `Command` type from `.././commands`
- `shouldInferenceConfigCommandBeImmediate` from `.././utils/immediateCommand`
- `getMainLoopModel`, `renderModelName` from `.././utils/model/model`

## Logic
Creates a command object:
- `type`: `'local-jsx'`
- `name`: `'model'`
- `description`: Getter that returns a string including the currently configured model (e.g., "Set the AI model for Claudette (currently Claude Sonnet 4.5)")
- `argumentHint`: `'[model]'`
- `immediate`: Getter that returns result of `shouldInferenceConfigCommandBeImmediate()`
- `load`: Dynamic import of `/model` (or `.tsx`)

## Exports
- Default command object (satisfies `Command`)