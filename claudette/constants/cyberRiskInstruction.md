## Purpose
Provides security behavior guidance for the agent when handling security-related requests, defining boundaries between defensive and offensive security assistance.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: none

## Logic
Defines a constant string instruction that directs the agent to assist with authorized security testing, defensive security, CTF challenges, and educational contexts while refusing requests for destructive techniques, DoS attacks, mass targeting, supply chain compromise, or detection evasion for malicious purposes.

## Exports
- `CYBER_RISK_INSTRUCTION` - constant string containing security behavior instructions for the agent
