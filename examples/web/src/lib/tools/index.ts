import { Tool } from '../../types'
import { BashTool } from './bash'
import { ReadTool } from './read'
import { WriteTool } from './write'
import { EditTool } from './edit'
import { GrepTool } from './grep'
import { GlobTool } from './glob'
import { WebFetchTool } from './webfetch'
import { WebSearchTool } from './websearch'
import { TodoWriteTool } from './todowrite'
import { AgentTool } from './agent'
import { SkillTool } from './skill'
import { TaskOutputTool } from './taskoutput'
import { TaskStopTool } from './taskstop'

export function getTools(): Tool[] {
  return [
    BashTool,
    ReadTool,
    WriteTool,
    EditTool,
    GrepTool,
    GlobTool,
    WebFetchTool,
    WebSearchTool,
    TodoWriteTool,
    AgentTool,
    SkillTool,
    TaskOutputTool,
    TaskStopTool,
  ]
}
