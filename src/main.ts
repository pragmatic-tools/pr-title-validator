import * as core from '@actions/core'
import * as github from '@actions/github'
import {isValidTitle} from './validator'

async function run(): Promise<void> {
  try {
    const input: string = core.getInput('pattern')
    const prTitle = github.context.payload.pull_request?.title
    if (!isValidTitle(prTitle, input)) {
      throw new Error(
        `Pull request title (${prTitle}) did not match the provided pattern (${input}).`
      )
    }
  } catch (error) {
    core.setFailed((error as Error).message)
  }
}

run()
