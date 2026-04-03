import { Agent } from '../../types'
import { getBuiltinAgents } from './builtin'

let userDefinedAgents: Agent[] = []

export function registerAgent(agent: Agent): void {
  userDefinedAgents.push(agent)
}

export function unregisterAgent(name: string): void {
  userDefinedAgents = userDefinedAgents.filter((a) => a.name !== name)
}

export function getAgents(): Agent[] {
  return [...getBuiltinAgents(), ...userDefinedAgents]
}

export function getAgent(name: string): Agent | undefined {
  return getAgents().find((a) => a.name === name)
}
