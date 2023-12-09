from django.db import models
from Clientes.models import Cliente
from Sucursales.models import Sucursal

# Create your models here.


class Tarjeta(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    numero_tarjeta = models.CharField(max_length=16)
    cvv = models.CharField(max_length=3)
    fecha_emision = models.DateTimeField()
    fecha_vencimiento = models.DateTimeField()
    banco_emisor = models.ForeignKey(Sucursal, on_delete=models.PROTECT)

    class Meta:
            db_table = 'tarjeta'
            verbose_name = "Tarjeta"
            verbose_name_plural = "Tarjetas"
            ordering = ["-cliente"] 


    def __str__(self):
        return f"Tarjeta {self.numero_tarjeta} de {self.cliente}"
    
class TarjetaDebito(Tarjeta):
    tipo_tarjeta = models.CharField(max_length=10, default='DEBITO')
    
    def __str__(self):
        return (
            f'Tarjeta de débito\n'
            f'Cliente: {self.cliente}\n'
            f'Número: {self.numero_tarjeta}\n'
            f'Fecha de emisión: {self.fecha_emision}\n'
            f'Fecha de vencimiento: {self.fecha_vencimiento}\n'
            f'Banco emisor: {self.banco_emisor}'
        )

class TarjetaCredito(Tarjeta):
    tipo_tarjeta = models.CharField(max_length=10, default='CREDITO')
    
    def __str__(self):
        return (
            f'Tarjeta de crédito\n'
            f'Cliente: {self.cliente}\n'
            f'Número: {self.numero_tarjeta}\n'
            f'Fecha de emisión: {self.fecha_emision}\n'
            f'Fecha de vencimiento: {self.fecha_vencimiento}\n'
            f'Banco emisor: {self.banco_emisor}'
        )
    
