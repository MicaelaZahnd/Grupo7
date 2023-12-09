from django.contrib import admin
from .models import Tarjeta, MarcaTarjeta

# Register your models here.

admin.site.register(MarcaTarjeta)
admin.site.register(Tarjeta)