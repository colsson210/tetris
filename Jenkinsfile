pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'date'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run exampleRunAndEndToEndTest'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying...'
      }
    }
  }
}
