import { Tool, Command, Skill, Agent, MemoryEntry } from '../../types'

interface BuildSystemPromptOptions {
  tools?: Tool[]
  commands?: Command[]
  cwd?: string
  vfs?: { list?: (path: string) => string[] }
  memories?: MemoryEntry[]
  skills?: Skill[]
  agents?: Agent[]
  customPrompt?: string
}

export function buildSystemPrompt(options: BuildSystemPromptOptions): string {
  const sections: string[] = []

  sections.push('You are Claudette, a helpful AI coding assistant.')

  if (options.tools && options.tools.length > 0) {
    sections.push(getToolDescriptions(options.tools))
  }

  if (options.commands && options.commands.length > 0) {
    sections.push(getCommandDescriptions(options.commands))
  }

  if (options.cwd) {
    sections.push(`## Working Directory\n\nCurrent working directory: ${options.cwd}`)
  }

  if (options.vfs && options.cwd) {
    try {
      const listing = options.vfs.list?.(options.cwd)
      if (listing && listing.length > 0) {
        sections.push(`## Filesystem Context\n\nContents of ${options.cwd}:\n${listing.slice(0, 50).join('\n')}`)
      }
    } catch {
      // ignore listing errors
    }
  }

  if (options.memories && options.memories.length > 0) {
    const memoryText = options.memories
      .slice(0, 10)
      .map((m) => `- [${m.tags.join(', ')}] ${m.content}`)
      .join('\n')
    sections.push(`## Memory\n\nRelevant memories:\n${memoryText}`)
  }

  if (options.skills && options.skills.length > 0) {
    const skillsText = options.skills
      .map((s) => `- **${s.name}**: ${s.description} (trigger: ${s.trigger})`)
      .join('\n')
    sections.push(`## Available Skills\n\n${skillsText}`)
  }

  if (options.agents && options.agents.length > 0) {
    const agentsText = options.agents
      .map((a) => `- **${a.name}**: ${a.description}`)
      .join('\n')
    sections.push(`## Available Agents\n\n${agentsText}`)
  }

  if (options.customPrompt) {
    sections.push(`## Custom Instructions\n\n${options.customPrompt}`)
  }

  return sections.join('\n\n')
}

export function getToolDescriptions(tools: Tool[]): string {
  const toolText = tools
    .map((tool) => {
      const schemaStr = tool.input_schema
        ? `\n  Input schema: ${JSON.stringify(tool.input_schema)}`
        : ''
      return `- **${tool.name}**: ${tool.description}${schemaStr}`
    })
    .join('\n')

  return `## Available Tools\n\n${toolText}`
}

export function getCommandDescriptions(commands: Command[]): string {
  const commandText = commands
    .map((cmd) => {
      const aliases = cmd.aliases.length > 0 ? ` (aliases: ${cmd.aliases.join(', ')})` : ''
      return `- **/${cmd.name}**${aliases}: ${cmd.description}`
    })
    .join('\n')

  return `## Available Commands\n\n${commandText}`
}
