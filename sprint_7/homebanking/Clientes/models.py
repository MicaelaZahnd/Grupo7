from django.db import models
from Sucursales.models import Sucursal
from django.contrib.auth.models import User

# Create your models here.

class Tipo_Cliente(models.Model):
    client_type = models.CharField(max_length=30)

    def __str__(self):
        return self.client_type 
    
class Cliente(models.Model):
    client_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    dni = models.CharField(max_length=8)
    dob = models.CharField(max_length=8)
    branch = models.ForeignKey(Sucursal, on_delete=models.CASCADE)
    type = models.ForeignKey(Tipo_Cliente, on_delete=models.CASCADE, blank=True, null=True)
    usuario = models.OneToOneField(User, on_delete=models.CASCADE, null=True)

    class Meta:
        db_table = 'cliente'
        verbose_name = "Cliente"
        verbose_name_plural = "Clientes"
        ordering = ["-client_id"]

    def __str__(self):
        return self.name + " " + self.surname + "dni: " + self.dni
    

