from django.shortcuts import render

# Create your views here.


def home(request):
    return render(request, 'main/home.html')

def apropos_view(request):
    return render(request, 'main/apropos.html')