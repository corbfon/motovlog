import { join } from 'path'
import { run } from './index'
import { INPUT_DIR } from './config'
import { readdir } from 'fs/promises'
import { pipeline } from './pipeline'

jest.mock('fs/promises', () => ({
  readdir: jest.fn(),
}))

jest.mock('./pipeline', () => ({
  pipeline: jest.fn(),
}))

describe('run', () => {
  it('passes parsed project files to pipeline', async () => {
    ;(readdir as jest.Mock).mockResolvedValue(['helmet.mp4', 'voice.wav', 'ignore.txt'])
    const expectedResult = { ok: true }
    ;(pipeline as jest.Mock).mockResolvedValue(expectedResult)

    await run()

    const base = join(INPUT_DIR, '2018-12-31_23-18-32_CAM_SES1')
    expect(pipeline).toHaveBeenCalledWith([
      { path: join(base, 'helmet.mp4'), type: 'mp4', role: 'HELMET' },
      { path: join(base, 'voice.wav'), type: 'wav', role: 'VOICE' },
    ])
  })
})
