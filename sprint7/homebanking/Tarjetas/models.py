from django.db import models
from Clientes.models import Cliente
# Create your models here.

class MarcaTarjeta(models.Model):
        brand_id = models.AutoField(primary_key=True)
        brand_name = models.CharField(max_length=30)

        class Meta:
            db_table = 'marca_tarjeta'
            verbose_name = "Marca de Tarjeta"
            verbose_name_plural = "Marcas de Tarjeta"
            ordering = ["-brand_id"]


        def __str__(self):
            return self.brand_name

class Tarjeta(models.Model):
    card_id = models.AutoField(primary_key=True)
    number = models.CharField(max_length=16)
    cvv = models.IntegerField()
    issue_date = models.CharField(max_length=8)
    expiration_date = models.CharField(max_length=8)
    type = models.TextField()
    brand = models.ForeignKey(MarcaTarjeta, on_delete=models.CASCADE, blank=True, null=True)
    client = models.ForeignKey(Cliente, on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
            db_table = 'tarjeta'
            verbose_name = "Tarjeta"
            verbose_name_plural = "Tarjetas"
            ordering = ["-client"] 

    def __str__(self): 
        return f"{self.client.name} de tipo: {self.type} {self.brand.brand_name}"
    
