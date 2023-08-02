import * as core from '@actions/core'
import { sayHello } from './hello'

async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')
    core.debug(`Waiting ${ms} milliseconds ...`)
    core.debug(new Date().toTimeString())

    await sayHello({
      name: core.getInput('name', { required: true }),
    })

    core.debug(new Date().toTimeString())
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run().catch((e) => core.setFailed(e instanceof Error ? e : String(e)))
