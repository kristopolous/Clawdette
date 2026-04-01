# workSecret

## Purpose
Provides utilities for decoding work secrets and building session URLs for bridge connections.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: JSON utils, types

## Logic
1. `decodeWorkSecret` - decodes base64url-encoded secret, validates version 1, extracts session_ingress_token and api_base_url
2. `buildSdkUrl` - builds WebSocket SDK URL (ws/wss) from API base URL and session ID
3. Uses /v2/ for localhost (direct to session-ingress), /v1/ for production (Envoy rewrite)
4. `sameSessionId` - compares session IDs regardless of tag prefix (cse_ vs session_)
5. `buildCCRv2SdkUrl` - builds HTTP(S) URL for CCR v2 sessions at /v1/code/sessions/{id}
6. `registerWorker` - POSTs to /worker/register, returns worker_epoch for CCRClient heartbeats

## Exports
- `decodeWorkSecret` - decodes and validates work secret, returns WorkSecret type
- `buildSdkUrl` - builds WebSocket ingress URL for session
- `buildCCRv2SdkUrl` - builds HTTP URL for CCR v2 session
- `sameSessionId` - compares session IDs by UUID body regardless of tag prefix
- `registerWorker` - registers bridge as worker, returns worker_epoch
