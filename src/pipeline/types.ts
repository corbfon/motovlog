export type PipelineStage = (stage: PipelineData) => PipelineData

export type ProjectFile = {
  path: string
  type: string
  role: string
}

export type StageResults = {
  name: string
  inputs: ProjectFile[]
  outputs: ProjectFile[]
  startTime: Date
  endTime: Date
}

export type PipelineData = {
  name: string
  inputFiles: ProjectFile[]
  stageResults: StageResults[]
}

const stage = (stageName: string) => {
  // set up logger
  // acquire the file
  // pre-flight check
  // do the thing
  // output
}
