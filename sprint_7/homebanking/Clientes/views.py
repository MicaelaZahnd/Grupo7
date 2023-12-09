from django.http import HttpResponseForbidden
from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .forms import user_form, client_form, user_auth_form
from .models import Cliente
from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password
import os

# Create your views here.
@login_required
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
        
@login_required        
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

def login(request):
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

    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        form.add_error('username', 'Usuario invalido.')
        return render(request, 'registration/login.html', {'form': form})
    
    if check_password(password, user.password):
    #hace lo del user auth
        return render(request, 'Clientes/base.html', {'user': user})
    else:
        form.add_error('password', 'Contraseña incorrecta.')
        return render(request, 'registration/login.html',  {'form': form})