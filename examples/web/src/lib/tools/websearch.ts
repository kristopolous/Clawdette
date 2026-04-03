import { Tool, ToolUseContext } from '../../types'

export const WebSearchTool: Tool = {
  name: 'WebSearch',
  description: 'Search the web for information. Returns search result snippets.',
  input_schema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'The search query',
      },
    },
    required: ['query'],
  },
  execute: async (input, context: ToolUseContext) => {
    const query = input.query as string
    try {
      const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`
      const response = await fetch(url, { signal: context.abortSignal })
      const html = await response.text()
      const results: string[] = []
      const resultRegex = /<a[^>]*class="result__a"[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>[\s\S]*?<a[^>]*class="result__snippet"[^>]*>([\s\S]*?)<\/a>/gi
      let match
      let count = 0
      while ((match = resultRegex.exec(html)) !== null && count < 10) {
        const title = match[2].replace(/<[^>]*>/g, '').trim()
        const snippet = match[3].replace(/<[^>]*>/g, '').trim()
        const url = match[1]
        results.push(`${count + 1}. ${title}\n   URL: ${url}\n   ${snippet}`)
        count++
      }
      if (results.length === 0) {
        return `No results found for "${query}".`
      }
      return results.join('\n\n')
    } catch {
      return `Search failed for "${query}". The search service may be unavailable.`
    }
  },
}
