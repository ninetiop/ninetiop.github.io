variable "github_token" {
  description = "Le token d'accès GitHub pour déployer l'application"
  type        = string
  sensitive   = true  # Pour ne pas afficher le token dans les logs
}