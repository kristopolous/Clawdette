# parser

## Purpose
---------------------------------------------------------------------------

## Imports
- **Stdlib**: execa
- **Internal**: ../debug, ../memoize, ../shell/powershellDetection, ../slowOperations

## Items

### getParseTimeoutMs
**Type**: Function

### makeInvalidResult
**Type**: Function

### toUtf16LeBase64
**Type**: Function

### buildParseScript
**Type**: Function

### mapStatementType
**Type**: Function

### mapElementType
**Type**: Function

### classifyCommandName
**Type**: Function

### stripModulePrefix
**Type**: Function

### transformCommandAst
**Type**: Function

### transformExpressionElement
**Type**: Function

### transformRedirection
**Type**: Function

### transformStatement
**Type**: Function

### transformRawOutput
**Type**: Function

### parsePowerShellCommandImpl
**Type**: Function

### getAllCommandNames
**Type**: Function

### getAllCommands
**Type**: Function

### getAllRedirections
**Type**: Function

### getVariablesByScope
**Type**: Function

### hasCommandNamed
**Type**: Function

### hasDirectoryChange
**Type**: Function

### isSingleCommand
**Type**: Function

### commandHasArg
**Type**: Function

### isPowerShellParameter
**Type**: Function

### commandHasArgAbbreviation
**Type**: Function

### getPipelineSegments
**Type**: Function

### isNullRedirectionTarget
**Type**: Function

### getFileRedirections
**Type**: Function

### deriveSecurityFlags
**Type**: Function

### checkElements
**Type**: Function

### PipelineElementType
**Type**: Type alias

### CommandElementType
**Type**: Type alias

### CommandElementChild
**Type**: Type alias

### StatementType
**Type**: Type alias

### ParsedCommandElement
**Type**: Type alias

### ParsedRedirection
**Type**: Type alias

### ParsedStatement
**Type**: Type alias

### ParsedVariable
**Type**: Type alias

### ParseError
**Type**: Type alias

### ParsedPowerShellCommand
**Type**: Type alias

### RawCommandElement
**Type**: Type alias

### RawRedirection
**Type**: Type alias

### RawPipelineElement
**Type**: Type alias

### RawStatement
**Type**: Type alias

### RawParsedOutput
**Type**: Type alias

### SecurityFlags
**Type**: Type alias

## Exports
- CommandElementChild
- ParsedCommandElement
- ParsedPowerShellCommand
- RawCommandElement
- RawRedirection
- RawPipelineElement
- RawStatement
- PARSE_SCRIPT_BODY
- WINDOWS_MAX_COMMAND_LENGTH
- MAX_COMMAND_LENGTH
- mapStatementType
- mapElementType
- classifyCommandName
- stripModulePrefix
- transformCommandAst
- transformExpressionElement
- transformRedirection
- transformStatement
- COMMON_ALIASES
- getAllCommandNames
- getAllCommands
- getAllRedirections
- getVariablesByScope
- hasCommandNamed
- hasDirectoryChange
- isSingleCommand
- commandHasArg
- PS_TOKENIZER_DASH_CHARS
- isPowerShellParameter
- commandHasArgAbbreviation
- getPipelineSegments
- isNullRedirectionTarget
- getFileRedirections
- deriveSecurityFlags

## Source
`parser.ts`