pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'date'
        sh 'cp --recursive /home/christian/Development/tetris/node_modules .'
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
