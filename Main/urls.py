from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name='home'),
   path('apropos/', apropos_view, name='apropos'),
]
