## Purpose
Provides a utility function for logging unary permission events with standardized metadata.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: `utils/env`, `utils/unaryLogging`, `PermissionRequest`

## Logic
Wraps the unary event logger with pre-populated metadata including message ID, platform, and feedback presence. Normalizes the language name to "none" and accepts the completion type, tool use confirmation object, event type, and optional feedback flag.

## Exports
- `logUnaryPermissionEvent` - logs accept or reject events for permission decisions with consistent metadata
