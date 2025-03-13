provider "azurerm" {
  features {
  }
  resource_provider_registrations = "none"
  subscription_id                 = "c314598e-4466-4fe1-8dd8-0a48d554c0b6"
  environment                     = "public"
  use_msi                         = false
  use_cli                         = true
  use_oidc                        = false
}
