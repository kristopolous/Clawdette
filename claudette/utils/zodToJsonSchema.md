# utils/zodToJsonSchema

## Purpose
Converts Zod v4 schemas to JSON Schema using native toJSONSchema.

## Imports
- **Stdlib**: (none)
- **External**: `zod/v4`
- **Internal**: (none)

## Logic
1. `JsonSchema7Type` - Record<string, unknown>
2. toolToAPISchema() runs this for every tool on every API request (~60-250 times/turn)
3. Tool schemas wrapped with lazySchema() which guarantees same ZodTypeAny reference per session
4. Can cache by identity using WeakMap
5. `cache` - WeakMap<ZodTypeAny, JsonSchema7Type> for caching
6. `zodToJsonSchema` - converts Zod v4 schema to JSON Schema format
7. Checks cache hit first
8. Uses toJSONSchema from zod/v4
9. Caches result for subsequent calls

## Exports
- `JsonSchema7Type` - JSON Schema 7 type
- `zodToJsonSchema` - converts Zod schema to JSON Schema
