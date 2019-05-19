workflow "Build and Test" {
  on = "push"
  resolves = ["npm-cy"]
}

action "Build" {
  uses = "actions/npm@master"
  args = "install"
}

action "E2E Tests" {
  uses = "bartlett705/npm-cy@f69478046d80aef1be0e17582c189a59bbfc9aa1"
  needs = ["Build"]
  args = "test"
}
