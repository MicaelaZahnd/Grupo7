#Importamos forms
from django import forms

class FormPrestamo(forms.Form):
    name = forms.CharField(label="Nombre", required=True,widget=forms.TextInput(attrs={'readonly':'readonly','class': 'form-control'}))
    surname = forms.CharField(label="Apellido", required=True,widget=forms.TextInput(attrs={'readonly':'readonly','class': 'form-control'}))
    dni = forms.CharField(label="DNI", required=True,widget=forms.TextInput(attrs={'readonly':'readonly','class': 'form-control'}))
    type = forms.ChoiceField(widget=forms.Select(attrs={'class': 'form-control'}), choices = [("HIPOTECARIO","HIPOTECARIO"),("PERSONAL","PERSONAL"),("PRENDARIO","PRENDARIO")])
    date = forms.DateField(label="Fecha Inicio", required=True, widget=forms.DateInput(attrs={'type': 'date', 'placeholder': 'yyyy-mm-dd','class': 'form-control'}))
    ammount = forms.IntegerField(label="Monto", required=True, widget=forms.TextInput(attrs={'class': 'form-control'}))
