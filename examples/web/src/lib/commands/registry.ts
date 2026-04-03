import { Command } from '../../types'
import { clearCommand } from './clear'
import { helpCommand } from './help'
import { modelCommand } from './model'
import { costCommand } from './cost'
import { statusCommand } from './status'
import { configCommand } from './config'
import { commitCommand } from './commit'
import { reviewCommand } from './review'
import { securityCommand } from './security'
import { insightsCommand } from './insights'
import { skillsCommand } from './skills'
import { agentsCommand } from './agents'
import { todosCommand } from './todos'
import { exportCommand } from './export'
import { memoryCommand } from './memory'
import { permissionCommand } from './permission'

export function getCommands(): Command[] {
  return [
    clearCommand,
    helpCommand,
    modelCommand,
    costCommand,
    statusCommand,
    configCommand,
    commitCommand,
    reviewCommand,
    securityCommand,
    insightsCommand,
    skillsCommand,
    agentsCommand,
    todosCommand,
    exportCommand,
    memoryCommand,
    permissionCommand,
  ]
}
