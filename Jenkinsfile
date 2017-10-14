pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'date'
      }
    }
    stage('Test') {
      sh './endToEndTest/compareTetrisOutput.sh ./tetrisOutput ./endToEndTest/tetrisOutputGoldenReference'
    }
    stage('Deploy') {
      echo 'Deploying...'
    }
  }
}
