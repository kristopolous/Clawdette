## Purpose
Generates the selection options for PowerShell tool permission requests, including yes/no, editable prefix rules, and apply-suggestions options.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: tools/PowerShellTool/toolName, utils/permissions/PermissionUpdateSchema, utils/permissions/permissionsLoader, CustomSelect/select, permissions/shellPermissionHelpers

## Logic
1. Start with a base yes/no option pair, expanding to input mode when feedback is enabled
2. When always-allow options are permitted and suggestions exist, add either an editable prefix input for command prefix rules or a suggestions label for compound permission updates
3. Prefer the editable prefix input over the non-editable suggestions label, falling back to the label when directory or Read-tool rules are present
4. Return the assembled options array typed as OptionWithDescription

## Exports
- `powershellToolUseOptions` - builds the array of selectable options for a PowerShell permission dialog based on suggestions, editable prefix, and feedback modes
- `PowerShellToolUseOption` - union type of possible option values: yes, yes-apply-suggestions, yes-prefix-edited, no
