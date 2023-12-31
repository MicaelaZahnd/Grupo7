from django.http import HttpResponseForbidden
from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .forms import user_form, client_form, user_auth_form
from .models import Cliente
from Cuentas.models import Cuenta
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
import os

# Create your views here.
def page(request):
        return render(request, os.path.join("Clientes","inicio.html"),{'name' : request.user.username})

@login_required
def list_client(request):
        customer = Cliente.objects.all()
        if request.user.is_superuser:
                return render(request, "Clientes/clientes.html", {"clientes":customer})
        else:
              return render(request, "Clientes/error.html", {"clientes":""})


def get_client(client_id):
    return Cliente.objects.get(pk=client_id)


def check_permissions(request, client):
    return client.usuario_id == request.user.id

@login_required
def detail(request, client_id):
    cliente = Cliente.objects.get(pk=client_id)
    if check_permissions(request, cliente):
        return render(request, "Clientes/detalle_cliente.html", {"cliente":cliente})
    else:
        return HttpResponseForbidden()
        
        
def registro(request):
    form = user_form
    cliente_form = client_form

    if request.method == 'POST':
        form = user_form(request.POST)
        cliente_form = client_form(request.POST)

        if form.is_valid() and cliente_form.is_valid():
            user = form.save()

            cliente = cliente_form.save(commit=False)
            cliente.usuario = user

            cliente.save()

            messages.success(request, 'Cuenta creada exitosamente')
            return render('registration/login.html')
        else:
            messages.error(request, "Form is not valid. Please check your input.")


    context = {'form': form, 'cliente_form': cliente_form}
    return render(request, 'Clientes/register.html', context)

def signin(request):
    form = user_auth_form()
    
    if request.method == 'GET':
        context = {'form': form}
        return render(request, 'registration/login.html', context)
    
    if request.method != 'POST':
         return render('')
    
    form= user_auth_form(request.POST)
    username = request.POST.get('username')
    password = request.POST.get('password')

    form.is_valid()
    
    user = authenticate(request, username=username, password=password)
    
    if not user:
        form.add_error(None, 'Usuario invalido.')
        return render(request, 'registration/login.html', {'form': form})
#        return render(request, 'registration/login.html', {'form': form})

    login(request, user)


    client= Cliente.objects.get(usuario=user)
    cuentas = Cuenta.objects.filter(client_id__exact = client.client_id)
    return render(request, 'Clientes/base.html', {'cliente' : client,
                                                    "cuentas":cuentas})

#   try:
#         user = User.objects.get(username=username)
#     except User.DoesNotExist:
#         form.add_error('username', 'Usuario invalido.')
#         return render(request, 'registration/login.html', {'form': form})
    
#     if check_password(password, user.password):
#         client= Cliente.objects.get(usuario=user)
#         cuentas = Cuenta.objects.filter(client_id__exact = client.client_id)
#         return render(request, 'Clientes/base.html', {'cliente' : client,
#                                                       "cuentas":cuentas})
#     else:
#         form.add_error('password', 'Contraseña incorrecta.')
#         return render(request, 'registration/login.html',  {'form': form})
    

# #def login(request):
#     form = user_auth_form()
    
#     if request.method == 'GET':
#         context = {'form': form}
#         return render(request, 'registration/login.html', context)
    
#     if request.method != 'POST':
#          return render('')
    
#     if request.method == 'POST':
#         form= user_auth_form(request.POST)
#         if form.is_valid():
#             username = request.POST.get('username')
#             password = request.POST.get('password')
    
#             user = authenticate(request, username=username, password=password)

#             if user is not None:
#                 login(request, user)
#                 form.add_error('user', 'Usuario o contraseña invalidas.')
#                 return redirect ('Clientes/base.html')        
            
#         else:
#             return render(request, 'registration/login.html', {'form': form})