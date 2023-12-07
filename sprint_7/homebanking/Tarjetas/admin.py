from django.contrib import admin

# Register your models here.
from .models import Tarjeta, MarcaTarjeta

admin.site.register(MarcaTarjeta)
admin.site.register(Tarjeta)