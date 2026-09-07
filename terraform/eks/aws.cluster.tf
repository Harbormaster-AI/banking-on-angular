# AWS Cluster
data "aws_eks_cluster" "bankingonangular-cluster" {
  name = "bankingonangular-cluster"
}

output "endpoint" {
  value = "${data.aws_eks_cluster.bankingonangular-cluster.endpoint}"
}

output "kubeconfig-certificate-authority-data" {
  value = "${data.aws_eks_cluster.bankingonangular-cluster.certificate_authority.0.data}"
}

output "eks_cluster_endpoint" {
  description = "Endpoint for your Kubernetes API server"
  value       = "${data.aws_eks_cluster.bankingonangular-cluster.endpoint
}


# Output for K8S
