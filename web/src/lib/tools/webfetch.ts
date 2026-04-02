import { Tool, ToolUseContext } from '../../types'
import axios from 'axios'

export const WebFetchTool: Tool = {
  name: 'WebFetch',
  description: 'Fetch the contents of a URL. Returns the text content of the page.',
  input_schema: {
    type: 'object',
    properties: {
      url: {
        type: 'string',
        description: 'The URL to fetch',
      },
    },
    required: ['url'],
  },
  execute: async (input, context: ToolUseContext) => {
    const url = input.url as string
    try {
      const response = await axios.get(url, {
        timeout: 10000,
        signal: context.abortSignal,
      })
      const text = typeof response.data === 'string' ? response.data : JSON.stringify(response.data, null, 2)
      return text.slice(0, 10000)
    } catch (e) {
      return `Error fetching URL: ${e instanceof Error ? e.message : String(e)}`
    }
  },
}
