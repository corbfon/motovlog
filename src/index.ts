import { join } from 'path'
import { readdir } from 'fs/promises'

import { INPUT_DIR } from './config'
import { pipeline } from './pipeline'
import { ProjectFile } from './pipeline/types'

/** @TODO make this configurable in the CLI */
const projectName = '2018-12-31_23-18-32_CAM_SES1'

const run = async () => {
  const sources: ProjectFile[] = (await readdir(join(INPUT_DIR, projectName)))
    .map((filename) => join(INPUT_DIR, projectName, filename))
    .map((path) => {
      const name = path
        .split('/')
        .reverse()
        .filter((x) => !!x)[0]
        .split('.')[0]
      let role = ''
      if (name === 'helmet') {
        role = 'HELMET'
      }
      if (name === 'voice') {
        role = 'VOICE'
      }
      if (!role) return
      return {
        path,
        type: path.split('.').reverse()[0],
        role,
      }
    })
    .filter((x) => !!x)
  const results = pipeline(sources)
  console.log(results)
}

run()
