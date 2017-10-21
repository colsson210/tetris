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
        sh './gradlew dockerRunTest' = npm test
        sh './gradlew dockerRunEndToEndTest' = npm run endToEndTest
      }
    }
    stage('Deploy') {
      steps {
        sh './gradlew deploy'
      }
    }
  }
}
