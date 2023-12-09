from django.shortcuts import render
from .models import Sucursal

# Create your views here.

def list_branch(request):
    sucursales = Sucursal.objects.all()
    return render(request, "Sucursales/sucursales.html", {"sucursales":sucursales})