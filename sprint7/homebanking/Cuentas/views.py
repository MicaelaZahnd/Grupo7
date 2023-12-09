from django.shortcuts import render
from .models import Cuenta
from Clientes.models import Cliente
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def list_accounts(request):
        cuentas = Cuenta.objects.all()
        if request.user.is_superuser:
                return render(request, "cuentas.html", {"cuentas":cuentas})
        else:
                error_message = "You do not have permission to access this page."
                return render(request, "Clientes/error.html", {"error_message": error_message})
        

@login_required
def account_client(request, client_id):
        cliente = Cliente.objects.get(pk=client_id)
        cuentas = Cuenta.objects.filter(client_id__exact = client_id)
        if cliente.usuario_id == request.user.id:
                return render(request, "cuentas_cliente.html", {"cuentas":cuentas, "cliente": cliente})
        else:
                return render(request, "Clientes/error.html", {"cuentas":""})
