from django.contrib import admin

# Register your models here.
from .models import Cuenta, TipoCuenta

admin.site.register(Cuenta)
admin.site.register(TipoCuenta)