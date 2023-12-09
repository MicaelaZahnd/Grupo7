from django.apps import AppConfig


class ClientesConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "Clientes"

class TipoClientesConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'TipoCliente'