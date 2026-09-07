# AWS Cluster
data "aws_eks_cluster" "banking-on-angular-cluster" {
  name = "banking-on-angular-cluster"
}

output "endpoint" {
  value = "${data.aws_eks_cluster.banking-on-angular-cluster.endpoint}"
}

output "kubeconfig-certificate-authority-data" {
  value = "${data.aws_eks_cluster.banking-on-angular-cluster.certificate_authority.0.data}"
}

output "eks_cluster_endpoint" {
  description = "Endpoint for your Kubernetes API server"
  value       = "${data.aws_eks_cluster.banking-on-angular-cluster.endpoint
}


# Output for K8S
