resource "kubernetes_replication_controller" "app-master" {
    metadata {
        name = "app-master"
    }

    spec {
        replicas = 1

        selector = {
            app  = "bankingonangular"
        }

        template {

            metadata {
                labels = {
                    app  = "bankingbackend"
                }
            }

            spec {
                container {
                    image = ":latest"
                    name  = "db-container"

                    port {
                        container_port = unset-value
                    }

                    resources {
                        requests {
                            cpu    = "100m"
                            memory = "100Mi"
                        }
                    }
                }
                container {
                    image = "theharbormaster/banking-on-angular:latest"
                    name  = "app-container"

                port {
                    container_port = #DefaultPort()
                }
                resources {
                    requests {
                        cpu    = "100m"
                        memory = "100Mi"
                    }
                }
            }
        }

    }
}