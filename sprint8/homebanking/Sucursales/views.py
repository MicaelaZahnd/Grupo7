from rest_framework import viewsets
from .models import Sucursal
from .serializers import SucursalSerializer

# Create your views here.

class SucursalViewSet(viewsets.ModelViewSet):
    queryset = Sucursal.objects.all()
    serializer_class = SucursalSerializer
