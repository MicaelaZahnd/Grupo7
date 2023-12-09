from Clientes.models import Cliente

def cliente_processor(request):
    if request.user.is_authenticated and request.user.is_superuser:
        cliente = Cliente.objects.get(usuario_id=request.user.id)
        if cliente is None:
            return {"error": "Cliente object not found"}
        else:
            return {"cliente": cliente}
    else:
        raise Exception("User is not authenticated or not a superuser.")