import { PipelineData, PipelineStage, ProjectFile } from './types'
import SyncAudioAndVideo from './sync'

export const pipeline = (inputFiles: ProjectFile[]): PipelineData => {
  const stages: [PipelineStage] = [SyncAudioAndVideo]

  const data: PipelineData = {
    name: 'default',
    inputFiles,
    stageResults: [],
  }

  for (let stage of stages) {
    stage(data)
  }

  return data
}
