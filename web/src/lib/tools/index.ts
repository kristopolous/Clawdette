import { Tool } from '../../types'
import { BashTool } from './bash'
import { ReadTool } from './read'
import { WriteTool } from './write'
import { EditTool } from './edit'
import { GrepTool } from './grep'
import { GlobTool } from './glob'
import { WebFetchTool } from './webfetch'

export function getTools(): Tool[] {
  return [
    BashTool,
    ReadTool,
    WriteTool,
    EditTool,
    GrepTool,
    GlobTool,
    WebFetchTool,
  ]
}
