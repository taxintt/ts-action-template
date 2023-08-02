import * as core from '@actions/core'

type Inputs = {
  name: string
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function sayHello(inputs: Inputs): Promise<void> {
  core.info(`hello ${inputs.name}`)
}
