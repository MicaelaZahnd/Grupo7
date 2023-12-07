from django.contrib import messages
from django.shortcuts import render
from django.shortcuts import render, redirect
from django.urls import reverse
from .forms import ContactForm
from django.contrib.auth.decorators import login_required

@login_required
def contact(request):
    contact_form = ContactForm(request.POST or None)
    if request.method == "POST":
        if contact_form.is_valid():
            name = contact_form.cleaned_data.get('nombre','')
            email = contact_form.cleaned_data.get('email','')
            content = contact_form.cleaned_data.get('contenido','')
            messages.success(request, 'Tu mensaje fue enviado con exito.')
        else:
            messages.error(request, 'Error al enviar tu mensaje. Por favor intente de nuevo.')
        return redirect(reverse('contacto')+"?ok")
    return render(request,'Contacto/contacto.html',{'form': contact_form})