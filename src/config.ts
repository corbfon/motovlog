import { join } from 'path'
import { mkdirSync } from 'fs'
const uuid = require('uuid').v4

export const DATA_DIR = join(__dirname, '..', 'data')
export const INPUT_DIR = join(DATA_DIR, 'input')

export const TEMP_DIR = join(__dirname, '..', 'tmp')

let tempProjectFolder: string | null = null
export const getProjectTempFolder = () => {
  if (tempProjectFolder) return tempProjectFolder
  tempProjectFolder = join(TEMP_DIR, uuid())
  mkdirSync(tempProjectFolder)
  return tempProjectFolder
}
