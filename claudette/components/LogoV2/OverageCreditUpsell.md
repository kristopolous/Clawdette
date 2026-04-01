## Purpose
Displays an upsell message for overage credit grants when the user is eligible and has not exceeded the impression cap.

## Imports
- **Stdlib**: Math
- **External**: react, react/compiler-runtime
- **Internal**: ink/Text, services/analytics/index, services/api/overageCreditGrant, utils/config, utils/format, Feed

## Logic
Checks backend eligibility for overage credit grants and enforces a 3-impression cap plus a dismiss flag. Renders either a two-line feed title/subtitle or a single-line usage text with highlighted amount, truncating to fit maxWidth. Provides a feed config factory for the homescreen rotating feed.

## Exports
- `isEligibleForOverageCreditGrant` - checks if the user is eligible for an overage credit grant
- `shouldShowOverageCreditUpsell` - checks eligibility plus impression cap and dismiss state
- `maybeRefreshOverageCreditCache` - triggers a background cache refresh if empty
- `useShowOverageCreditUpsell` - hook returning whether to show the upsell
- `incrementOverageCreditUpsellSeenCount` - increments the seen counter and logs analytics
- `OverageCreditUpsell` - renders the upsell display with truncated text
- `createOverageCreditFeed` - creates a FeedConfig for the homescreen feed
