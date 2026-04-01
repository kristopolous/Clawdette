## Purpose
Factory functions that create FeedConfig objects for different feed types displayed in the welcome screen.

## Imports
- **Stdlib**: os/homedir, Number
- **External**: figures, react
- **Internal**: ink/Box, ink/Text, projectOnboardingState, services/api/referral, types/logs, utils/cwd, utils/format, Feed

## Logic
Provides four feed creators: recent activity feed formats log entries with relative timestamps; whats new feed parses release notes with optional timestamp extraction; project onboarding feed filters and sorts onboarding steps with completion checkmarks and a home directory warning; guest passes feed renders decorative asterisks with a referral subtitle.

## Exports
- `createRecentActivityFeed` - creates a feed from recent activity logs with timestamps
- `createWhatsNewFeed` - creates a feed from release notes/changelog entries
- `createProjectOnboardingFeed` - creates a feed from onboarding steps with completion status
- `createGuestPassesFeed` - creates a feed promoting guest passes with decorative content
