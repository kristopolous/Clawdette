import { Skill } from '../../types'
import { getBundledSkills } from './bundled'

const userSkills: Skill[] = []

export function registerSkill(skill: Skill): void {
  userSkills.push(skill)
}

export function unregisterSkill(name: string): void {
  const index = userSkills.findIndex((s) => s.name === name)
  if (index !== -1) {
    userSkills.splice(index, 1)
  }
}

export function getSkills(): Skill[] {
  return [...getBundledSkills(), ...userSkills]
}

export function findSkill(name: string): Skill | undefined {
  return getSkills().find((s) => s.name === name)
}
