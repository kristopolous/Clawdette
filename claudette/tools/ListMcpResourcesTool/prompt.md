## Purpose
Provides tool metadata (name, description, prompt) for the ListMcpResources tool.

## Imports
- None

## Logic
Exports three constants:
- `LIST_MCP_RESOURCES_TOOL_NAME` - string 'ListMcpResourcesTool'
- `DESCRIPTION` - brief description of the tool and usage examples (list all resources or from specific server)
- `PROMPT` - detailed instruction for the model: lists resources from MCP servers, explains 'server' optional parameter, notes that each resource includes a 'server' field.

The `PROMPT` is what the model sees about when and how to use this tool.

## Exports
- `LIST_MCP_RESOURCES_TOOL_NAME` (constant)
- `DESCRIPTION` (string)
- `PROMPT` (string)
