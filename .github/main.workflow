workflow "Build and Test" {
  resolves = ["Test"]
  on = "push"
}

action "Build" {
  uses = "actions/npm@master"
  args = "install"
}

action "Test" {
  uses = "actions/npm@master"
  needs = ["Build"]
  args = "test"
}
