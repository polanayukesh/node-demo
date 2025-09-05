pipeline {
  agent any

  tools { 
    nodejs 'node-18'   // must match the NodeJS name from Global Tool Config
  }

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
        script {
          if (fileExists('package-lock.json')) {
            sh 'npm ci'
          } else {
            echo "⚠️ package-lock.json not found, falling back to npm install"
            sh 'npm install'
          }
        }
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
