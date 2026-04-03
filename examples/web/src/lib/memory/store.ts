import Fuse from 'fuse.js'
import { MemoryEntry, MemoryStore } from '../../types'

let idCounter = 0

export function createMemoryStore(): MemoryStore {
  const entries: MemoryEntry[] = []

  function add(entry: Omit<MemoryEntry, 'id' | 'createdAt'>): void {
    const memoryEntry: MemoryEntry = {
      ...entry,
      id: `mem_${++idCounter}`,
      createdAt: new Date(),
    }
    entries.push(memoryEntry)
  }

  function search(query: string): MemoryEntry[] {
    if (!query.trim()) {
      return [...entries].sort((a, b) => b.importance - a.importance)
    }

    const fuse = new Fuse(entries, {
      keys: ['content', 'tags'],
      threshold: 0.4,
    })

    const results = fuse.search(query)
    return results.map((r) => r.item)
  }

  function getAll(): MemoryEntry[] {
    return [...entries].sort((a, b) => b.importance - a.importance)
  }

  function clear(): void {
    entries.length = 0
  }

  return { add, search, getAll, clear }
}
