from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from .models import Cliente

class user_form(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'password1', 'password2']

class client_form(forms.ModelForm):
    class Meta:
        model = Cliente
        fields = ['name', 'surname', 'dni', "dob", "branch", "type"]

class user_auth_form(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'password']