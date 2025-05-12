from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name='home'),
   path('apropos/', apropos_view, name='apropos'),
   path('rejoindre/', rejoindre_view, name='rejoindre'),
   path('calendrier/', calendrier_view, name='calendrier'),
   path('menu_deroulant/', menu_deroulant_view, name='menu_deroulant'),
   path('news/', news_views, name='news')
]
