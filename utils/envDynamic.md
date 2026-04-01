# envDynamic

## Purpose
Functions that require execFileNoThrow and thus cannot be in env.ts

## Imports
- **Stdlib**: bun:bundle, fs/promises, lodash-es/memoize.js
- **Internal**: ./env.js, ./envUtils.js, ./execFileNoThrow.js, ./genericProcessUtils.js

## Items

### getIsBubblewrapSandbox
**Type**: Function

### isMuslEnvironment
**Type**: Function

### detectJetBrainsIDEFromParentProcessAsync
**Type**: Function

### getTerminalWithJetBrainsDetectionAsync
**Type**: Function

### getTerminalWithJetBrainsDetection
**Type**: Function

### initJetBrainsDetection
**Type**: Function

## Exports
- getTerminalWithJetBrainsDetectionAsync
- getTerminalWithJetBrainsDetection
- initJetBrainsDetection
- envDynamic

## Source
`envDynamic.ts`