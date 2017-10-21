pipeline {
  agent { dockerfile true }
  stages {
    stage('Build') {
      steps {
        sh './gradlew copyNodeModules'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
        sh 'npm run endToEndTest'
      }
    }
    stage('Deploy') {
      steps {
        sh './gradlew deploy'
      }
    }
  }
}
