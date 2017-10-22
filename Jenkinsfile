pipeline {
  agent { dockerfile true }
  stages {
    stage('Build') {
      steps {
        sh './gradlew dockerBuild'
      }
    }
    stage('Test') {
      steps {
        sh './gradlew dockerRunTest'
      }
    }
    stage('Deploy') {
      steps {
        sh 'echo "deploy"'
      }
    }
  }
}
