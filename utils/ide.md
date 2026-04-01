# ide

## Purpose
Lazy: IdeOnboardingDialog.tsx pulls React/ink; only needed in interactive onboarding path

## Imports
- **Stdlib**: axios, execa, lodash-es/capitalize.js, lodash-es/memoize.js, net, os, path, src/services/analytics/index.js
- **External**: @modelcontextprotocol/sdk/client/index.js
- **Internal**: ../bootstrap/state.js, ../services/mcp/client.js, ./config.js, ./env.js, ./envUtils.js, ./fsOperations.js, ./genericProcessUtils.js, ./jetbrains.js, ./log.js, ./platform.js...

## Items

### isProcessRunning
**Type**: Function

### makeAncestorPidLookup
**Type**: Function

### isVSCodeIde
**Type**: Function

### isJetBrainsIde
**Type**: Function

### getTerminalIdeType
**Type**: Function

### getSortedIdeLockfiles
**Type**: Function

### readIdeLockfile
**Type**: Function

### checkIdeConnection
**Type**: Function

### getIdeLockfilesPaths
**Type**: Function

### cleanupStaleIdeLockfiles
**Type**: Function

### maybeInstallIDEExtension
**Type**: Function

### findAvailableIDE
**Type**: Function

### detectIDEs
**Type**: Function

### maybeNotifyIDEConnected
**Type**: Function

### hasAccessToIDEExtensionDiffFeature
**Type**: Function

### isIDEExtensionInstalled
**Type**: Function

### installIDEExtension
**Type**: Function

### getInstallationEnv
**Type**: Function

### getClaudeCodeVersion
**Type**: Function

### getInstalledVSCodeExtensionVersion
**Type**: Function

### getVSCodeIDECommandByParentProcess
**Type**: Function

### getVSCodeIDECommand
**Type**: Function

### isCursorInstalled
**Type**: Function

### isWindsurfInstalled
**Type**: Function

### isVSCodeInstalled
**Type**: Function

### detectRunningIDEsImpl
**Type**: Function

### detectRunningIDEs
**Type**: Function

### detectRunningIDEsCached
**Type**: Function

### resetDetectRunningIDEs
**Type**: Function

### getConnectedIdeName
**Type**: Function

### getIdeClientName
**Type**: Function

### toIDEDisplayName
**Type**: Function

### getConnectedIdeClient
**Type**: Function

### closeOpenDiffs
**Type**: Function

### initializeIdeIntegration
**Type**: Function

### installFromArtifactory
**Type**: Function

### IDEExtensionInstallationStatus
**Type**: Interface

### LockfileJsonContent
**Type**: Type alias

### IdeLockfileInfo
**Type**: Type alias

### DetectedIDEInfo
**Type**: Type alias

### IdeType
**Type**: Type alias

### IdeConfig
**Type**: Type alias

## Exports
- DetectedIDEInfo
- IdeType
- isVSCodeIde
- isJetBrainsIde
- isSupportedVSCodeTerminal
- isSupportedJetBrainsTerminal
- isSupportedTerminal
- getTerminalIdeType
- getSortedIdeLockfiles
- getIdeLockfilesPaths
- cleanupStaleIdeLockfiles
- IDEExtensionInstallationStatus
- maybeInstallIDEExtension
- findAvailableIDE
- detectIDEs
- maybeNotifyIDEConnected
- hasAccessToIDEExtensionDiffFeature
- isIDEExtensionInstalled
- isCursorInstalled
- isWindsurfInstalled
- isVSCodeInstalled
- detectRunningIDEs
- detectRunningIDEsCached
- resetDetectRunningIDEs
- getConnectedIdeName
- getIdeClientName
- toIDEDisplayName
- getConnectedIdeClient
- closeOpenDiffs
- initializeIdeIntegration

## Source
`ide.ts`