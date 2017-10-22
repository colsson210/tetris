pipeline {
  agent { dockerfile true }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t abc:1 .'
      }
    }
    stage('Test') {
      steps {
        sh 'docker run --rm --name tetris abc:1 npm test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'echo "deploy"'
      }
    }
  }
}
