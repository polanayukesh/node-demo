pipeline {
  agent any
  tools { nodejs 'node-NOdeJs' }   // must match Global Tool Config in Jenkins

  options {
    timestamps()
    skipDefaultCheckout(true)
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
        sh 'node -v && npm -v'
      }
    }

    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint:ci'
      }
      post {
        always {
          recordIssues tools: [eslint(pattern: 'reports/eslint/eslint.json')]
        }
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test:ci'
      }
      post {
        always {
          junit 'reports/junit/*.xml'
          publishCoverage adapters: [coberturaAdapter('coverage/cobertura-coverage.xml')]
        }
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}

