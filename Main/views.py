from django.shortcuts import render

# Create your views here.


def home(request):
    return render(request, 'main/home.html')

def apropos_view(request):
    return render(request, 'main/apropos.html')

def rejoindre_view(request):
    return render(request, 'main/rejoindre.html')

def calendrier_view(request):
    return render(request, 'main/calendrier.html')