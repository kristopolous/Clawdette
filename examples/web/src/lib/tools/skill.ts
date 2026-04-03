import { Tool, ToolUseContext, Message } from '../../types'

export const SkillTool: Tool = {
  name: 'Skill',
  description: 'Execute a skill by name with a given prompt. Skills provide, specialized system prompts that modify behavior.',
  input_schema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The name of the skill to execute',
      },
      prompt: {
        type: 'string',
        description: 'The user prompt to send to the skill',
      },
    },
    required: ['name', 'prompt'],
  },
  execute: async (input, context: ToolUseContext) => {
    const name = input.name as string
    const prompt = input.prompt as string

    const skill = context.skills.find((s) => s.name === name)
    if (!skill) {
      const available = context.skills.map((s) => s.name).join(', ')
      return `Skill "${name}" not found. Available skills: ${available || 'none'}.`
    }

    const messages: Message[] = [
      { role: 'system', content: skill.systemPrompt },
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
        return `Skill execution error: ${response.status} ${errorText}`
      }

      const data = await response.json()
      const content = data.choices?.[0]?.message?.content
      if (content) {
        return content
      }
      return 'Skill returned no response.'
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error'
      return `Skill execution failed: ${message}`
    }
  },
}
