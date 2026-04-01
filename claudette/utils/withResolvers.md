# utils/withResolvers

## Purpose
Provides Promise.withResolvers() polyfill for Node < 22.

## Imports
- **Stdlib**: (none)
- **External**: (none)
- **Internal**: (none)

## Logic
1. Polyfill for Promise.withResolvers() (ES2024, Node 22+)
2. package.json declares "engines": { "node": ">=18.0.0" } so can't use native one
3. `withResolvers` - creates promise with external resolve/reject
4. Returns { promise, resolve, reject }
5. promise: Promise<T>
6. resolve: (value: T | PromiseLike<T>) => void
7. reject: (reason?: unknown) => void
8. Creates new Promise, captures resolve/reject in closure
9. Returns object with promise and resolver functions

## Exports
- `withResolvers` - creates promise with resolvers
- `PromiseWithResolvers` - promise with resolvers type
