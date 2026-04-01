## Purpose
Creates synthetic message and tool stubs for remote permission requests when the local client lacks full context.

## Imports
- **Stdlib**: crypto
- **External**: none
- **Internal**: entrypoints/sdk/controlTypes, Tool, types/message, utils/slowOperations

## Logic
Generates a synthetic AssistantMessage containing tool_use content from a remote permission request, allowing the local UI to render permission prompts even though the actual tool execution happens on the remote container. Also creates minimal Tool stubs for tools unknown to the local client (e.g., MCP tools registered only on the remote side), which route to a fallback permission request handler with basic input rendering.

## Exports
- `createSyntheticAssistantMessage` - creates a fake AssistantMessage from a permission request for local rendering
- `createToolStub` - creates a minimal Tool stub for unrecognized remote tools with basic input display and permission gating
