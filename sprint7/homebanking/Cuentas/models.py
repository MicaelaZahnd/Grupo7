from django.db import models
from Clientes.models import Cliente

# Create your models here.

class TipoCuenta(models.Model):
    type_id = models.AutoField(primary_key=True)
    type_name = models.CharField(max_length=30)
   
    
    class Meta:
            db_table = 'tipo_cuenta'
            verbose_name = "Tipo de cuenta"
            verbose_name_plural = "Tipo de cuentas"
            ordering = ["-type_id"] #este campo indica que ordenemos los registros por fecha de creado en forma descendente

    def __str__(self):
        return self.type_name

class Cuenta(models.Model):
    account_id = models.AutoField(primary_key=True)
    client = models.ForeignKey(Cliente, on_delete=models.CASCADE, blank=True, null=True)
    balance = models.IntegerField()
    iban = models.CharField(max_length=100)
    type = models.ForeignKey(TipoCuenta, on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        db_table = 'cuenta'
        verbose_name = "Cuenta"
        verbose_name_plural = "Cuentas"
        ordering = ["-account_id"]


    def __str__(self):
       return self.client.name + " de tipo: " + self.type.type_name
    
    