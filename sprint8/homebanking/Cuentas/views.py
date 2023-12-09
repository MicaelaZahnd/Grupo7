from django.shortcuts import render
from rest_framework import viewsets
from .models import Cuenta
from .serializers import CuentaSerializer

# Create your views here.

class CuentaViewSet(viewsets.ModelViewSet):
    queryset = Cuenta.objects.all()
    serializer_class = CuentaSerializer

    def get_queryset(self):
        queryset = Cuenta.objects.all()

        cliente = self.request.query_params.get('cliente', None)
        if cliente:
            queryset = queryset.filter(cliente=cliente)

        return queryset