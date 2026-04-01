## Purpose
Displays a guest passes upsell message encouraging users to share the product and earn extra usage credits.

## Imports
- **Stdlib**: none
- **External**: react, react/compiler-runtime
- **Internal**: ink/Text, services/analytics/index, services/api/referral, utils/config

## Logic
Checks cached eligibility for guest passes and enforces a 3-impression cap plus a dismiss flag. Resets counters when passes are refreshed. Renders a decorative upsell line with asterisk decorations and either a reward-based or default message.

## Exports
- `useShowGuestPassesUpsell` - hook returning whether to show the guest passes upsell
- `incrementGuestPassesSeenCount` - increments the seen counter and logs analytics
- `GuestPassesUpsell` - renders the guest passes upsell display
