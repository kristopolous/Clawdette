# ssrfGuard

## Purpose
SSRF (Server-Side Request Forgery) guard for HTTP hooks. Blocks private, link-local, and non-routable addresses to prevent project-configured HTTP hooks from reaching cloud metadata endpoints or internal infrastructure. Loopback (127.0.0.0/8, ::1) is intentionally allowed for local dev policy servers.

## Imports
- **Stdlib**: axios (types), dns, net

## Logic
1. `isBlockedAddress` checks if an IP string is a blocked address. Dispatches to isBlockedV4 or isBlockedV6 based on isIP() result. Non-valid IPs return false (shouldn't happen when called on dns.lookup results).
2. Blocked IPv4 ranges: 0.0.0.0/8, 10.0.0.0/8, 100.64.0.0/10 (CGNAT), 169.254.0.0/16 (link-local/cloud metadata), 172.16.0.0/12, 192.168.0.0/16. Loopback 127.0.0.0/8 is allowed.
3. Blocked IPv6: :: (unspecified), fc00::/7 (unique local), fe80::/10 (link-local), and IPv4-mapped addresses (::ffff:X:Y) where the embedded IPv4 is in a blocked range. ::1 loopback is allowed.
4. `expandIPv6Groups` normalizes IPv6 addresses to 8 hex groups, handling :: expansion and trailing dotted-decimal IPv4 notation.
5. `extractMappedIPv4` detects IPv4-mapped IPv6 addresses (first 80 bits zero, next 16 bits 0xffff) and extracts the embedded IPv4.
6. `ssrfGuardedLookup` is a dns.lookup-compatible function for use as axios's `lookup` option. Validates IP literals directly; for hostnames, resolves via DNS then checks all returned addresses against blocked ranges. Supports the `all: true` option. Rejects with ERR_HTTP_HOOK_BLOCKED_ADDRESS if any address is blocked.
7. When a global proxy or sandbox network proxy is in use, the guard is effectively bypassed (proxy performs DNS resolution). The sandbox proxy enforces its own domain allowlist.

## Exports
- `isBlockedAddress(address)` - Returns true if the address is in a blocked range (private, link-local, non-routable). Loopback is allowed.
- `ssrfGuardedLookup(hostname, options, callback)` - DNS lookup function that blocks resolved addresses in private ranges. Compatible with axios's `lookup` config option.

## Source
`ssrfGuard`