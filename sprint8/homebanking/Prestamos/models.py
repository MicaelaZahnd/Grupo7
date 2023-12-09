from django.db import models
from Clientes.models import Cliente

# Create your models here.
class Prestamo(models.Model):
    loan_id = models.AutoField(primary_key=True)
    loan_type = models.CharField(max_length=30)
    loan_date = models.DateField()
    loan_ammount = models.IntegerField()
    loan_preapproval = models.CharField(max_length=30)
    client = models.ForeignKey(Cliente, on_delete=models.CASCADE)

    class Meta:
        db_table = 'prestamo'
        verbose_name = "Prestamo"
        verbose_name_plural = "Prestamos" 
        ordering = ["-loan_id"] #este campo indica que ordenemos los registros por fecha de creado en forma descendente


    def __str__(self):
        return self.loan_type