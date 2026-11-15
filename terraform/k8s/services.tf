resource "kubernetes_service" "app-master" {
    metadata {
        name = "app-master"
    }

    spec {
        selector = {
          app  = "bankingOnAngular"
        }
        port {
            name        = "http"
            port        = 80
            target_port = 4000
        }

        port {
            name        = "db-port"
            port        = 3306
            target_port = 3306
        }

        port {
            port        = 4000
            target_port = 4000
            name        = "app-port"
        }

        type = "LoadBalancer"
    }
  
}
