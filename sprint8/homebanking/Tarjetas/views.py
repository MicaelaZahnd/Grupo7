from rest_framework import viewsets
from .models import Tarjeta
from .serializers import TarjetaSerializer

# Create your views here.
class TarjetaViewSet(viewsets.ModelViewSet):
    queryset = Tarjeta.objects.all()
    serializer_class = TarjetaSerializer
