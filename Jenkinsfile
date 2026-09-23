pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                echo "Checkout Started"
                deleteDir()
                sh '''
                git clone https://github.com/Adinan01/webpipeline.git
                ls -l
                '''
            }
        }
        stage('deploy'){
            steps{
                echo "Deployment Started"
                sh '''
                rm -rf /var/www/html/*
                cp -r webpipeline/* /var/www/html
                '''
            }
        }
    }
}
