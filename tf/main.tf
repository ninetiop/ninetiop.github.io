resource "azurerm_resource_group" "res-0" {
  location = "centralus"
  name     = "portfolio"
}
resource "azurerm_static_web_app" "res-1" {
  location            = "centralus"
  name                = "portfolio"
  repository_token    = var.github_token
  repository_branch   = "main"
  repository_url      = "https://github.com/ninetiop/portfolio"
  resource_group_name = "portfolio"
  depends_on = [
    azurerm_resource_group.res-0,
  ]
}
