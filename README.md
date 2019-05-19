# Cypress Automation

Automated testing using [Cypress](https://www.cypress.io/)

## Setup

run `npm install`

## Running from command line

The following npm script have been added to run the pack.

### Run headless

```bash
npm run e2e:run
```

### Run in viewer

```bash
npm run e2e:open
```

## CircleCi

CircleCi config has been created in the `.circleci` folder this will allow you to run the automated test nightly and per build. You will need to add this repo to CircleCi once that has been done the configuration should automatically be picked up.

You can use the following to trigger circle builds from within jenkins just add the snippet below to you codesync task. You can read more about triggering circle jobs [here](https://circleci.com/docs/2.0/api-job-trigger/)

```bash
#!/bin/bash
curl -u ${CIRCLE_API_USER_TOKEN}: -d build_parameters[CIRCLE_JOB]=test https://circleci.com/api/v1.1/project/github/Travelopia/domino-sunsail/tree/dev
```

## VSCode

This repo has been setup with a vscode workspace this will help ensure that everyone is formatting code in the same manner.

Tasks and recommended extensions have also been added. VSCode tasks allow you to easily run the npm scripts see https://code.visualstudio.com/docs/editor/tasks.

The recommended extensions will auto suggest that you install the suggested extension when you first open this project, this is useful to make sure all devs are running the same extensions.
