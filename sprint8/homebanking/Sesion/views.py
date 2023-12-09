from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from django.contrib.auth import authenticate, login
from .serializers import SigninSerializer


class AuthViewSet(viewsets.ViewSet):
    @action(detail=False, methods=['post'])
    def signin(self, request):
        serializer = SigninSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        username = serializer.validated_data['username']
        password = serializer.validated_data['password']

        user = authenticate(request, username=username, password=password)
        if user:
            cliente = user.cliente

            login(request, user)

            response = Response({'success': True,
                                 'name':cliente.nombre,
                                   'username':user.username,
                                     'password':user.password,
                                       'id':cliente.id})
            response.set_cookie('cliente_id', str(cliente.id), httponly=True, max_age=3600)
            response.set_cookie('cliente_data', f'{cliente.nombre} {cliente.apellido}', max_age=3600)

            return response
        else:
            return Response({'success': False}, status=status.HTTP_401_UNAUTHORIZED)