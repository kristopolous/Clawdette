## Purpose
Defines Zod validation schemas for the keybindings.json configuration file and enumerates all valid contexts and action identifiers.

## Imports
- **Stdlib**: none
- **External**: `zod/v4`
- **Internal**: `utils/lazySchema.js`

## Logic
Declares constant arrays of valid context names and action identifiers with human-readable descriptions, then constructs Zod schemas that validate the structure of a single keybinding block and the entire keybindings configuration file. TypeScript types are inferred from the schemas.

## Exports
- `KEYBINDING_CONTEXTS` - array of valid UI context names where bindings can apply
- `KEYBINDING_CONTEXT_DESCRIPTIONS` - human-readable descriptions for each context
- `KEYBINDING_ACTIONS` - array of all valid keybinding action identifiers
- `KeybindingBlockSchema` - Zod schema for a single context's binding block
- `KeybindingsSchema` - Zod schema for the entire keybindings.json file
- `KeybindingsSchemaType` - TypeScript type inferred from the schema
