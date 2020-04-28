import com.moowork.gradle.node.yarn.YarnTask;

plugins {
  base
  id("com.github.node-gradle.node") version "2.2.3"
}

tasks {
  named("yarn_test") {
    dependsOn("yarn_install")
  }

  named("yarn_start") {
    dependsOn("yarn_install")
  }

  named("check") {
    dependsOn("test")
  }
}

task("test", YarnTask::class) {
  args = listOf("test-check")
}

task("start", YarnTask::class) {
  args = listOf("start")
}

task("storybook", YarnTask::class) {
  args = listOf("storybook")
}

task("compile", YarnTask::class) {
  dependsOn("yarn_install")

  inputs.files(fileTree("src"))
  outputs.dir("build")
  args = listOf("build")
}

node {
  version = "12.16.0"
  yarnVersion = "1.15.2"
  download = true
}
