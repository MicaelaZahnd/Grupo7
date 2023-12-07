"""
URL configuration for homebanking project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from Clientes import views
from Cuentas import views as vista
from Contacto import views as vista1
from Tarjetas import views as vista2
from Inicio import views as vista3
from Sucursales import views as vista4
from Prestamos import views as vista5

urlpatterns = [
    path('', vista3.home, name="home"),
    path('clientes/inicio/', views.page, name="inicio"),
    path('clientes/', views.list_client, name="clientes"),
    path('clientes/<int:client_id>/', views.detail, name="detalle_cliente"),
    path('clientes/registro/', views.registro, name="registro"),
    path('cuentas/', vista.list_accounts, name="cuentas"),
    path('cuentas/<int:client_id>/', vista.account_client, name="cuentas_cliente"),
    path('contacto/', vista1.contact, name="contacto"),
    path('tarjetas/', vista2.list_card, name="tarjetas"),
    path('tarjetas/<int:client_id>/', vista2.by_client, name="tarjetas_cliente"),
    path('sucursales/', vista4.list_branch, name="sucursales"),
    path('prestamos/<int:client_id>/', vista5.loan, name="prestamo"),
    path('misprestamos/<int:client_id>/', vista5.client_loan, name="prestamos_cliente"),
    path('accounts/',include('django.contrib.auth.urls')),
    path('admin/', admin.site.urls),
]