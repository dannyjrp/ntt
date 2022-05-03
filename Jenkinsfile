pipeline {
    agent any
    environment {
        nombre1= '1'
        nombre2= '2'
        nombretest = '10'
    }
    
    stages {
        stage('Build'){
            steps {
            sh 'ssh danny@192.168.1.9 sh /home/danny/Documents/proyectos/ntt/scripts/build/build.sh 10'
            }
        }
        stage('Test'){
            steps{
            sh 'ssh danny@192.168.1.9 sh /home/danny/Documents/proyectos/ntt/scripts/test/test.sh'
            }
        }
        stage('Deploy'){
            steps{
                sh 'ssh danny@192.168.1.9 sh /home/danny/Documents/proyectos/ntt/scripts/deploy/deploy.sh 1 2'
            
            }
        }

    }
}