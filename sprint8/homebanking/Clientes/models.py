
from django.db import models
from bancos.models import Banco
from django.contrib.auth.models import User


class Cliente(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    dni = models.IntegerField(unique=True)
    fecha_nacimiento = models.DateTimeField()
    banco = models.ForeignKey(Banco, on_delete=models.CASCADE)
    tipo_cliente = models.CharField(max_length=10, default="CLASSIC", choices=(('BLACK', 'BLACK'), ('GOLD','GOLD'), ('CLASSIC', 'CLASSIC')))

    def __str__(self):
        return f'{self.nombre} {self.apellido} - DNI: {self.dni}'

    class Meta:
        db_table = 'cliente'
        verbose_name = "Cliente"
        verbose_name_plural = "Clientes"
        ordering = ["-client_id"]

    def __str__(self):
        return self.name + " " + self.surname + " " + "dni: " + self.dni
    

