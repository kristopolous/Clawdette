## Purpose
Provides core URL fetching, caching, domain blocklist checking, and HTML-to-markdown conversion for WebFetch tool.

## Imports
- **External**: `axios`, `LRUCache` from 'lru-cache'
- **Internal**:
  - `AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS`, `logEvent` from services/analytics
  - `queryHaiku` from services/api/claude
  - `AbortError` from utils/errors
  - `getWebFetchUserAgent` from utils/http
  - `logError` from utils/log
  - `isBinaryContentType`, `persistBinaryContent` from utils/mcpOutputStorage
  - `getSettings_DEPRECATED` from utils/settings
  - `asSystemPrompt` from utils/systemPromptType
  - `isPreapprovedHost` from preapproved
  - `makeSecondaryModelPrompt` from prompt

## Logic
Exports many functions and constants:
- Custom error classes: `DomainBlockedError`, `DomainCheckFailedError`, `EgressBlockedError`
- Caching: `URL_CACHE` (LRU, 15min TTL, 50MB), `DOMAIN_CHECK_CACHE` (128 entries, 5min)
- `clearWebFetchCache()` clears both caches
- Lazy `turndown` service singleton for HTML→markdown
- Constants: `MAX_URL_LENGTH` (2000), `MAX_HTTP_CONTENT_LENGTH` (10MB), `FETCH_TIMEOUT_MS` (60s), `DOMAIN_CHECK_TIMEOUT_MS` (10s), `MAX_REDIRECTS` (10), `MAX_MARKDOWN_LENGTH` (100k)
- `isPreapprovedUrl(url)`: checks host+path against preapproved list
- `validateURL(url)`: length, URL parsing, no credentials, at least 2 hostname parts
- `checkDomainBlocklist(domain)`: async check to api.anthropic.com; caches allowed; returns allowed/blocked/check_failed
- `isPermittedRedirect(original, redirect)`: allows same origin, www changes, no port/creds changes
- `getWithPermittedRedirects(url, signal, redirectChecker, depth)`: axios fetch with manual redirect handling; detects egress blocks
- `getURLMarkdownContent(url, abortController)`: main entry; validates, checks cache, upgrades http→https, preflight domain check unless skip flag, fetches with redirects, converts HTML→markdown via Turndown, caches result. For binary content, also persists to disk via `persistBinaryContent`. Returns `FetchedContent`.
- `applyPromptToMarkdown(prompt, markdownContent, signal, isNonInteractiveSession, isPreapprovedDomain)`: Sends markdown + prompt to small model (`queryHaiku`) with different guidelines for preapproved vs other domains. Truncates content to `MAX_MARKDOWN_LENGTH`. Returns model's text response.

## Exports
- `clearWebFetchCache()`
- `isPreapprovedUrl(url)`
- `validateURL(url)`
- `checkDomainBlocklist(domain)`
- `isPermittedRedirect(original, redirect)`
- `getWithPermittedRedirects(...)`
- `getURLMarkdownContent(url, abortController)`
- `applyPromptToMarkdown(...)`
- `FetchedContent` type
- Plus types for errors internal but not exported
