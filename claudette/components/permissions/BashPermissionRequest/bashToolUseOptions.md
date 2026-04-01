## Purpose
Generates the selection options for bash tool permission requests, including yes/no, editable prefix rules, and classifier-reviewed options.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: tools/BashTool/toolName, utils/bash/commands, utils/permissions/bashClassifier, utils/permissions/PermissionResult, utils/permissions/PermissionUpdateSchema, utils/permissions/permissionsLoader, CustomSelect/select, permissions/shellPermissionHelpers

## Logic
1. Start with a base yes/no option pair, expanding to input mode when feedback is enabled
2. When always-allow options are permitted, add either an editable prefix input for command prefix rules or a suggestions label for compound permission updates
3. Conditionally add a classifier-reviewed option when classifier permissions are enabled, the description is non-empty, and it does not already exist in the allow list
4. Strip output redirections from command labels so filenames do not appear as commands
5. Return the assembled options array typed as OptionWithDescription

## Exports
- `bashToolUseOptions` - builds the array of selectable options for a bash permission dialog based on suggestions, classifier state, editable prefix, and feedback modes
- `BashToolUseOption` - union type of possible option values: yes, yes-apply-suggestions, yes-prefix-edited, yes-classifier-reviewed, no
