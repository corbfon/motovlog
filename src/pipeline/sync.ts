import { PipelineData, PipelineStage, StageResults } from './types'
import { getProjectTempFolder } from '../config'

export default function SyncVoiceAndVideo(data: PipelineData): PipelineData {
  const name = 'SYNC_VOICE_AND_VIDEO'
  const inputs = data.inputFiles
  const startTime = new Date()

  const tmp = getProjectTempFolder()

  const endTime = new Date()
  data.stageResults.push({
    name,
    inputs,
    outputs: [],
    startTime,
    endTime,
  })

  return data
}
