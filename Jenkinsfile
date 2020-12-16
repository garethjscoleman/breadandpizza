pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building'
        sh 'npm run install'
        sh 'npm run build'
      }
    }

  }
}