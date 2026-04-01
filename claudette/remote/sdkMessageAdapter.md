## Purpose
Converts SDK messages from the remote backend to internal REPL message types for rendering.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: entrypoints/agentSdkTypes, types/message, utils/debug, utils/messages/mappers, utils/messages

## Logic
Maps various SDK message types (assistant, user, stream_event, result, system, tool_progress, auth_status, tool_use_summary, rate_limit_event) to corresponding internal Message or StreamEvent types. Supports options to conditionally convert tool results and user text messages depending on whether the client is in CCR mode or direct connect mode. Unknown message types are gracefully ignored with debug logging.

## Exports
- `ConvertedMessage` - union type representing a converted message, stream event, or ignored result
- `convertSDKMessage` - converts an SDKMessage to REPL message format based on message type
- `isSessionEndMessage` - checks if an SDKMessage indicates the session has ended
- `isSuccessResult` - checks if an SDKResultMessage indicates success
- `getResultText` - extracts the result text from a successful SDKResultMessage
