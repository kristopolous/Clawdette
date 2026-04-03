import { Command, CommandContext, CommandResult } from '../../types'

const AVAILABLE_MODELS = [
  'claude-sonnet-4-20250514',
  'claude-opus-4-20250514',
  'claude-haiku-4-20250514',
  'gpt-4o',
  'gpt-4o-mini',
]

export const modelCommand: Command = {
  name: 'model',
  aliases: [],
  description: 'Switch the AI model',
  category: 'model',
  requiresArg: true,
  execute: async (args: string, context: CommandContext): Promise<CommandResult> => {
    const modelName = args.trim()
    if (!AVAILABLE_MODELS.includes(modelName)) {
      return {
        output: `Invalid model: ${modelName}\nAvailable models:\n${AVAILABLE_MODELS.map((m) => `  ${m}`).join('\n')}`,
      }
    }
    context.setModel(modelName)
    return { output: `Model switched to: ${modelName}` }
  },
}
