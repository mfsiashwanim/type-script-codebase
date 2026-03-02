pipeline{
    agent any
    stages{
        stage('Git checkout'){
            steps{
                git 'https://github.com/mfsiashwanim/type-script-codebase.git'
            }
        }
        stage('dependencies install'){
            steps{
                bat 'npm ci'
                bat 'npx playwright install'
                bat 'npx playwright test firsttest.spec.ts'
            }
        }
        stage('allure-report'){
            steps{
                allure includeProperties: false, jdk: '', resultPolicy: 'LEAVE_AS_IS', results: [[path: 'allure-results']]
            }
        }
    }
}