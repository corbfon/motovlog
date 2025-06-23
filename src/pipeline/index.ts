import { PipelineData, PipelineStage, ProjectFile } from './types'
import SyncAudioAndVideo from './sync'

export const pipeline = async (inputFiles: ProjectFile[]): Promise<PipelineData> => {
  const stages: PipelineStage[] = [SyncAudioAndVideo]

  let data: PipelineData = {
    name: 'default',
    inputFiles,
    stageResults: [],
  }

  for (let stage of stages) {
    console.log('running stage')
    data = await stage(data)
  }

  return data
}
