## Purpose
Defines dependency injection types and production factory for the query module, enabling test mocking without per-module spies.

## Imports
- **Stdlib**: crypto (randomUUID)
- **External**: none
- **Internal**: services/api/claude (queryModelWithStreaming), services/compact/autoCompact (autoCompactIfNeeded), services/compact/microCompact (microcompactMessages)

## Logic
Provides a narrow QueryDeps type with four dependencies (callModel, microcompact, autocompact, uuid) and a productionDeps factory that returns the real implementations. This allows tests to inject fakes directly through QueryParams instead of using spyOn-per-module patterns.

## Exports
- `QueryDeps` - type defining the four injectable dependencies for query operations
- `productionDeps` - factory function returning real implementations of all QueryDeps
