# components/grove/Grove

## Purpose
Provides dialogs for consumer terms/privacy policy updates and data privacy settings management.

## Imports
- **Stdlib**: (none)
- **External**: `react`, `react/compiler-runtime`
- **Internal**: services/analytics/index (AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS, logEvent), ink (Box, Link, Text, useInput), services/api/grove (AccountSettings, calculateShouldShowGrove, GroveConfig, getGroveNoticeConfig, getGroveSettings, markGroveNoticeViewed, updateGroveSettings), CustomSelect/index (Select), design-system/Byline (Byline), design-system/Dialog (Dialog), design-system/KeyboardShortcutHint (KeyboardShortcutHint)

## Logic
1. `GroveDecision` - type for user decisions (accept_opt_in, accept_opt_out, defer, escape, skip_rendering)
2. `Props` - { showIfAlreadyViewed, location, onDone }
3. `NEW_TERMS_ASCII` - ASCII art for new terms notification
4. `GracePeriodContentBody` - content shown before terms take effect
5. `PostGracePeriodContentBody` - content shown after terms are updated
6. `GroveDialog` - React component for terms/policy update notice
7. Uses React compiler runtime (_c) for memoization
8. useEffect: fetches grove settings and notice config
9. calculateShouldShowGrove determines if dialog should render
10. markGroveNoticeViewed called on display
11. onChange: updates grove settings based on selection
12. Accept options vary based on domain_excluded flag
13. Grace period shows "Not now" defer option
14. PrivacySettingsDialogProps - { settings, domainExcluded?, onDone }
15. `PrivacySettingsDialog` - React component for privacy settings
16. State: groveEnabled from settings.grove_enabled
17. useInput: toggles grove on tab/return/space (unless domainExcluded)
18. Value display varies: false, false (for domain), or true
19. Input guide shows toggle/cancel hints
20. Both dialogs log analytics events

## Exports
- `GroveDecision` - type for user decisions on terms/policy
- `GroveDialog` - terms and privacy policy update dialog component
- `PrivacySettingsDialog` - data privacy settings management component
