pipeline {
    agent any

    tools {
        nodejs 'NodeJS18'
        jdk 'JDK17'
    }
 
    environment {
        AWS_ACCOUNT_ID = "YOUR_AWS_ACCOUNT_ID" // Update this in Jenkins or replace here
        AWS_REGION = "ap-south-1"
        ECR_REPO = "2048-game-repo"
        IMAGE_TAG = "v1"
        ECR_REGISTRY = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"
        SONARQUBE_ENV = 'sonar-server'
        KUBECONFIG = '/var/lib/jenkins/.kube/config'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/sujanvijay/20-07-Project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv("${SONARQUBE_ENV}") {
                    sh '''
                        npm install -g sonar-scanner
                        sonar-scanner \
                            -Dsonar.projectKey=puzzlegame \
                            -Dsonar.sources=src \
                            -Dsonar.host.url=$SONAR_HOST_URL \
                            -Dsonar.login=$SONAR_AUTH_TOKEN
                    '''
                }
            }
        }

        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t ${ECR_REGISTRY}/${ECR_REPO}:${IMAGE_TAG} .'
            }
        }

        stage('Push to ECR') {
            steps {
                script {
                    sh '''
                        aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REGISTRY}
                        docker push ${ECR_REGISTRY}/${ECR_REPO}:${IMAGE_TAG}
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                    aws eks update-kubeconfig --region ${AWS_REGION} --name Game-eks-cluster
                    kubectl get nodes
                    kubectl apply -f deployment.yml
                    kubectl apply -f service.yml
                '''
            }
        }

    }   

    post {
        always {
            echo 'Pipeline finished.'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
