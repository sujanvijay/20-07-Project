output "eks_cluster_name" {
  value = module.eks.cluster_name
}

output "eks_cluster_endpoint" {
  value = module.eks.cluster_endpoint
}

output "ecr_repository_url" {
  value = aws_ecr_repository.game_repo.repository_url
}

output "jenkins_public_ip" {
  value = aws_instance.jenkins.public_ip
}

output "sonarqube_public_ip" {
  value = aws_instance.sonarqube.public_ip
}

output "kubeconfig_update_command" {
  value = "aws eks update-kubeconfig --region $${var.aws_region} --name $${var.cluster_name}"
}
