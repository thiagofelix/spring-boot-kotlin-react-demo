subprojects {
    group = "com.thiagofelix"
    version = "0.0.1-SNAPSHOT"

    repositories {
        mavenLocal()
        mavenCentral()
        jcenter()
    }
}

gradle.buildFinished {
  delete(project.buildDir)
}

