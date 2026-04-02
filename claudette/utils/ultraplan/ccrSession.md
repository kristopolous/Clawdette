# ccrSession

## Purpose
CCR session polling for /ultraplan. Waits for an approved ExitPlanMode

## Imports
- **Internal**: ../../entrypoints/agentSdkTypes, .././tools/ExitPlanModeTool/constants, ../debug, ../sleep, ../teleport/api

## Items

### UltraplanPollError
**Type**: Class

### pollForApprovedExitPlanMode
**Type**: Function

### contentToText
**Type**: Function

### extractTeleportPlan
**Type**: Function

### extractApprovedPlan
**Type**: Function

### PollFailReason
**Type**: Type alias

### ScanResult
**Type**: Type alias

### UltraplanPhase
**Type**: Type alias

### PollResult
**Type**: Type alias

## Exports
- PollFailReason
- UltraplanPollError
- ULTRAPLAN_TELEPORT_SENTINEL
- ScanResult
- UltraplanPhase
- ExitPlanModeScanner
- PollResult
- pollForApprovedExitPlanMode

## Source
`ccrSession`