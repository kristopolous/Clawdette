# components/LspRecommendation/LspRecommendationMenu

## Purpose
Provides LSP plugin recommendation dialog for code intelligence.

## Imports
- **Stdlib**: (none)
- **External**: `react`
- **Internal**: ink (Box, Text), CustomSelect select (Select), permissions PermissionDialog (PermissionDialog)

## Logic
1. `Props` - { pluginName, pluginDescription?, fileExtension, onResponse }
2. `AUTO_DISMISS_MS` (30s) - auto-dismiss timeout
3. `LspRecommendationMenu` - React component for LSP recommendation
4. Uses useRef for onResponse to handle timeout callback
5. Auto-dismisses to 'no' after AUTO_DISMISS_MS
6. `onSelect` - handles selection: 'yes'/'no'/'never'/'disable' → onResponse
7. Options:
   - "Yes, install {pluginName}" (value: 'yes')
   - "No, not now" (value: 'no')
   - "Never for {pluginName}" (value: 'never')
   - "Disable all LSP recommendations" (value: 'disable')
8. Renders PermissionDialog with title "LSP Plugin Recommendation"
9. Explains LSP benefits (go-to-definition, error checking)
10. Shows plugin name, description, and triggering file extension
11. Shows Select component with options
12. onCancel calls onResponse('no')

## Exports
- `LspRecommendationMenu` - LSP plugin recommendation dialog component
