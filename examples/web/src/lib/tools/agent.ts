import { Tool, ToolUseContext, Message } from '../../types'

const AGENT_PROMPTS: Record<string, string> = {
  explorer: 'You are an Explorer agent. Your role is to thoroughly explore codebases, find relevant files, and gather information. Be systematic and comprehensive in your exploration.',
  planner: 'You are a Planner agent. Your role is to break down complex tasks into clear, actionable steps. Think carefully about dependencies, order of operations, and potential risks.',
  verifier: 'You are a Verifier agent. Your role is to verify that changes are correct, complete, and meet the requirements. Check for bugs, edge cases, and code quality.',
}

export const AgentTool: Tool = {
  name: 'Agent',
  description: 'Spawn a sub-agent to handle a specialized task. Specify the agent type (explorer, planner, verifier) and a prompt describing what to do.',
  input_schema: {
    type: 'object',
    properties: {
      prompt: {
        type: 'string',
        description: 'The task prompt for the sub-agent',
      },
      agent: {
        type: 'string',
        enum: ['explorer', 'planner', 'verifier'],
        description: 'The type of specialized agent to use',
      },
    },
    required: ['prompt'],
  },
  execute: async (input, context: ToolUseContext) => {
    const prompt = input.prompt as string
    const agentType = input.agent as string | undefined

    const systemPrompt = agentType && AGENT_PROMPTS[agentType]
      ? AGENT_PROMPTS[agentType]
      : 'You are a helpful assistant.'

    const messages: Message[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: prompt },
    ]

    try {
      const response = await fetch(`${context.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${context.apiKey}`,
        },
        body: JSON.stringify({
          model: context.model,
          messages,
          max_tokens: 4096,
        }),
        signal: context.abortSignal,
      })

      if (!response.ok) {
        const errorText = await response.text()
        return `Agent error: ${response.status} ${errorText}`
      }

      const data = await response.json()
      const content = data.choices?.[0]?.message?.content
      if (content) {
        return content
      }
      return 'Agent returned no response.'
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      return `Agent execution failed: ${message}`
    }
  },
}
