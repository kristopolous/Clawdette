# teammateMailbox

## Purpose
Lock options: retry with backoff so concurrent callers (multiple Claudes

## Imports
- **Stdlib**: fs/promises, path, zod/v4
- **Internal**: ../constants/xml.js, ../entrypoints/sdk/coreSchemas.js, ../tools/SendMessageTool/constants.js, ../types/message.js, ./agentId.js, ./array.js, ./debug.js, ./envUtils, ./errors, ./lazySchema...

## Items

### getInboxPath
**Type**: Function

### ensureInboxDir
**Type**: Function

### readMailbox
**Type**: Function

### readUnreadMessages
**Type**: Function

### writeToMailbox
**Type**: Function

### markMessageAsReadByIndex
**Type**: Function

### markMessagesAsRead
**Type**: Function

### clearMailbox
**Type**: Function

### formatTeammateMessages
**Type**: Function

### createIdleNotification
**Type**: Function

### isIdleNotification
**Type**: Function

### createPermissionRequestMessage
**Type**: Function

### createPermissionResponseMessage
**Type**: Function

### isPermissionRequest
**Type**: Function

### isPermissionResponse
**Type**: Function

### createSandboxPermissionRequestMessage
**Type**: Function

### createSandboxPermissionResponseMessage
**Type**: Function

### isSandboxPermissionRequest
**Type**: Function

### isSandboxPermissionResponse
**Type**: Function

### createShutdownRequestMessage
**Type**: Function

### createShutdownApprovedMessage
**Type**: Function

### createShutdownRejectedMessage
**Type**: Function

### sendShutdownRequestToMailbox
**Type**: Function

### isShutdownRequest
**Type**: Function

### isPlanApprovalRequest
**Type**: Function

### isShutdownApproved
**Type**: Function

### isShutdownRejected
**Type**: Function

### isPlanApprovalResponse
**Type**: Function

### isTaskAssignment
**Type**: Function

### isTeamPermissionUpdate
**Type**: Function

### createModeSetRequestMessage
**Type**: Function

### isModeSetRequest
**Type**: Function

### isStructuredProtocolMessage
**Type**: Function

### markMessagesAsReadByPredicate
**Type**: Function

### getLastPeerDmSummary
**Type**: Function

### TeammateMessage
**Type**: Type alias

### IdleNotificationMessage
**Type**: Type alias

### PermissionRequestMessage
**Type**: Type alias

### PermissionResponseMessage
**Type**: Type alias

### SandboxPermissionRequestMessage
**Type**: Type alias

### SandboxPermissionResponseMessage
**Type**: Type alias

### PlanApprovalRequestMessage
**Type**: Type alias

### PlanApprovalResponseMessage
**Type**: Type alias

### ShutdownRequestMessage
**Type**: Type alias

### ShutdownApprovedMessage
**Type**: Type alias

### ShutdownRejectedMessage
**Type**: Type alias

### TaskAssignmentMessage
**Type**: Type alias

### TeamPermissionUpdateMessage
**Type**: Type alias

### ModeSetRequestMessage
**Type**: Type alias

## Exports
- TeammateMessage
- getInboxPath
- readMailbox
- readUnreadMessages
- writeToMailbox
- markMessageAsReadByIndex
- markMessagesAsRead
- clearMailbox
- formatTeammateMessages
- IdleNotificationMessage
- createIdleNotification
- isIdleNotification
- PermissionRequestMessage
- PermissionResponseMessage
- createPermissionRequestMessage
- createPermissionResponseMessage
- isPermissionRequest
- isPermissionResponse
- SandboxPermissionRequestMessage
- SandboxPermissionResponseMessage
- createSandboxPermissionRequestMessage
- createSandboxPermissionResponseMessage
- isSandboxPermissionRequest
- isSandboxPermissionResponse
- PlanApprovalRequestMessageSchema
- PlanApprovalRequestMessage
- PlanApprovalResponseMessageSchema
- PlanApprovalResponseMessage
- ShutdownRequestMessageSchema
- ShutdownRequestMessage
- ShutdownApprovedMessageSchema
- ShutdownApprovedMessage
- ShutdownRejectedMessageSchema
- ShutdownRejectedMessage
- createShutdownRequestMessage
- createShutdownApprovedMessage
- createShutdownRejectedMessage
- sendShutdownRequestToMailbox
- isShutdownRequest
- isPlanApprovalRequest
- isShutdownApproved
- isShutdownRejected
- isPlanApprovalResponse
- TaskAssignmentMessage
- isTaskAssignment
- TeamPermissionUpdateMessage
- isTeamPermissionUpdate
- ModeSetRequestMessageSchema
- ModeSetRequestMessage
- createModeSetRequestMessage
- isModeSetRequest
- isStructuredProtocolMessage
- markMessagesAsReadByPredicate
- getLastPeerDmSummary

## Source
`teammateMailbox.ts`