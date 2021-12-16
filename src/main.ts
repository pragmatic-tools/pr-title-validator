import * as core from '@actions/core'
import * as github from '@actions/github'
import { isValidTitle } from './validator';

async function run(): Promise<void> {
  try {
    const input: string = core.getInput('pattern')
    if (!isValidTitle(github.context.payload.pull_request?.title, input)) {
      throw new Error('Pull request title did not match the provided pattern.')
    }
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()
