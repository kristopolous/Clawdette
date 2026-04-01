## Purpose
Tracks token usage against a budget and decides whether to continue or stop a query based on consumption thresholds and diminishing returns detection.

## Imports
- **Stdlib**: none
- **External**: none
- **Internal**: utils/tokenBudget (getBudgetContinuationMessage)

## Logic
Maintains a BudgetTracker that records continuation count, token deltas, and start time. The checkTokenBudget function compares current token usage against the budget, continuing if under 90% threshold and not showing diminishing returns (less than 500 tokens per check for 3+ continuations). Returns a continue decision with a nudge message or a stop decision with completion event details including duration and diminishing returns flag.

## Exports
- `BudgetTracker` - type tracking continuation count, token deltas, and start time
- `createBudgetTracker` - factory function initializing a fresh BudgetTracker
- `TokenBudgetDecision` - union type representing either a continue or stop decision
- `checkTokenBudget` - function evaluating token usage against budget and returning a continue/stop decision
