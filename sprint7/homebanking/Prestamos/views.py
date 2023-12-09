from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from datetime import date, datetime
from .forms import FormPrestamo
from .models import Prestamo
from Clientes.models import Cliente
from Cuentas.models import Cuenta

# Create your views here.

@login_required
def loan(request, client_id):
    cliente = Cliente.objects.get(pk=client_id)
    cuenta = Cuenta.objects.filter(client_id__exact=client_id, type_id__exact=1).first()
    if cliente.usuario_id == request.user.id:
        
        initial_dict = {
            "nombre": cliente.name,
            "apellido": cliente.surname,
            "dni": cliente.dni
        }

        form_prestamo = FormPrestamo(initial=initial_dict)
        

        if request.method == "POST":
            form_prestamo = FormPrestamo(data=request.POST)

            if form_prestamo.is_valid() and cuenta:

                tipoRecibido = form_prestamo.cleaned_data['tipo']
                fechaRecibida = form_prestamo.cleaned_data['fecha']
                montoRecibido = form_prestamo.cleaned_data['monto']

                def create_prestamo_and_update_balance(tipo, fecha, monto, estado, client_id):
                    prestamo = Prestamo(tipo=tipo, fecha=fecha, monto=monto, estado=estado, client_id = client_id)
                    prestamo.save()
                    cuenta.balance = cuenta.balance + int(monto)
                    cuenta.save()

                if datetime.strptime(fechaRecibida, '%Y-%m-%d') > datetime.today():
                    if cliente.type == 1:
                        if int(montoRecibido) <= 100000:
                            create_prestamo_and_update_balance(tipoRecibido, fechaRecibida, montoRecibido, "Aprobado", cliente.client_id)
                            messages.success(request, 'Préstamo otorgado, verificar en "Mis préstamos", el saldo en su cuenta '+ cuenta.iban +' ha sido actualizado')
                        elif int(montoRecibido) > 100000:
                            create_prestamo_and_update_balance(tipoRecibido, fechaRecibida, montoRecibido, "Pendiente", cliente.client_id)
                            messages.warning(request, 'Préstamo solicitado correctamente pero pendiente de aprobación, solo en caso de ser aprobado el saldo será depositado')
                    elif cliente.type == 2:
                        if int(montoRecibido) <= 300000:
                            create_prestamo_and_update_balance(tipoRecibido, fechaRecibida, montoRecibido, "Aprobado", cliente.client_id)
                            messages.success(request, 'Préstamo otorgado, verificar en "Mis préstamos", el saldo en su cuenta '+ cuenta.iban +' ha sido actualizado')
                        elif int(montoRecibido) > 300000:
                            create_prestamo_and_update_balance(tipoRecibido, fechaRecibida, montoRecibido, "Pendiente", cliente.client_id)
                            messages.warning(request, 'Préstamo solicitado correctamente pero pendiente de aprobación, solo en caso de ser aprobado el saldo será depositado')
                    elif cliente.type == 3:
                        if int(montoRecibido) <= 500000:
                            create_prestamo_and_update_balance(tipoRecibido, fechaRecibida, montoRecibido, "Aprobado", cliente.client_id)
                            messages.success(request, 'Préstamo otorgado, verificar en "Mis préstamos", el saldo en su cuenta '+ cuenta.iban +' ha sido actualizado')
                        elif int(montoRecibido) > 500000:
                            create_prestamo_and_update_balance(tipoRecibido, fechaRecibida, montoRecibido, "Pendiente", cliente.client_id)
                            messages.warning(request, 'Préstamo solicitado correctamente pero pendiente de aprobación, solo en caso de ser aprobado el saldo será depositado') 
                else:
                    messages.error(request,"Error: la fecha de inicio del préstamo debe ser posterior a "+ str(datetime.strftime(date.today(),'%d/%m/%Y')))
            else:
                 messages.error(request, "Error: el cliente debe poseer una caja de ahorro en pesos para solicitar un préstamo")

        return render(request, "Prestamos/prestamo.html", {"form":form_prestamo,
                                                       "cliente":cliente,
                                                       "cuenta":cuenta})
    else:
        return render(request, "Clientes/error.html", {"forms":""})

@login_required    
def client_loan(request, client_id):
    cliente = Cliente.objects.get(pk=client_id)
    prestamos = Prestamo.objects.filter(client_id__exact = client_id)
    if cliente.usuario_id == request.user.id:
        return render(request, "Prestamos/prestamos_cliente.html", {"prestamos":prestamos,
                                                   "cliente":cliente})
    else:
        return render(request, "Clientes/error.html", {"prestamos":""})

