from django.db import models

# Create your models here.
class Sucursal(models.Model):
    branch_id = models.AutoField(primary_key=True)
    branch_name = models.CharField(max_length=50)
    branch_number = models.IntegerField()

    class Meta:
        db_table = 'sucursal'
        verbose_name = "Sucursal"
        verbose_name_plural = "Sucursales"
        ordering = ["-branch_id"]


    def __str__(self):
        return self.branch_name + "/n con id = " + str(self.branch_id)