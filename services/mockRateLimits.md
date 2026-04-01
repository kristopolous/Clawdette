# mockRateLimits

## Purpose
Provides mock rate limit headers for internal testing/demo purposes (ant-only).

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: oauth types, billing utils, claudeAiLimits types

## Logic
1. `MockHeaders` - type for mock rate limit headers
2. Unified rate limit headers: status, reset, claim, overage-status/reset/disabled-reason
3. Fallback headers: fallback, fallback-percentage
4. Early warning utilization headers: 5h/7d utilization, reset, surpassed-threshold
5. `MockHeaderKey` - union of mock header keys
6. `MockScenario` - predefined scenarios:
   - normal, session-limit-reached, approaching-weekly-limit, weekly-limit-reached
   - overage-active/warning/exhausted, out-of-credits
   - org-zero-credit-limit, org-spend-cap-hit, member-zero-credit-limit
   - seat-tier-zero-credit-limit
   - opus-limit/warning, sonnet-limit/warning
   - fast-mode-limit/short-limit
   - extra-usage-required, clear
7. `setMockRateLimitHeaders` - sets mock headers for testing
8. `getMockRateLimitHeaders` - gets current mock headers
9. `clearMockRateLimits` - clears mock headers
10. WARNING: Mock headers may not match actual API spec - validate before production use

## Exports
- `MockHeaders` - mock headers type
- `MockHeaderKey` - mock header key union
- `MockScenario` - predefined mock scenarios
- `setMockRateLimitHeaders` - sets mock headers
- `getMockRateLimitHeaders` - gets mock headers
- `clearMockRateLimits` - clears mock headers
