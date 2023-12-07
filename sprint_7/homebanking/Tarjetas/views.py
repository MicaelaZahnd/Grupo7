from django.shortcuts import render
from .models import Tarjeta
from Clientes.models import Cliente
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def list_card(request):
    try:
        tarjetas = Tarjeta.objects.filter(user=request.user).select_related()
        if request.user.is_superuser:
            return render(request, "Tarjetas/tarjetas.html", {"tarjetas":tarjetas})
        else:
            return render(request, "Clientes/error.html")
    except Exception as e:
        return render(request, "Clientes/error.html", {"error_message": str(e)})

@login_required
def by_client(request, client_id):
        cliente = Cliente.objects.get(pk=client_id)
        tarjetas = Tarjeta.objects.filter(client_id__exact = client_id)
        if cliente.usuario_id == request.user.id:
                return render(request, "Tarjetas/tarjetas_cliente.html", {"tarjetas":tarjetas, "cliente": cliente})
        else:
                return render(request, "Clientes/error.html")
                
