# user_api/urls.py
from django.urls import path
from .views import UserRegister, UserLogin, UserLogout, UserView, ContactView

urlpatterns = [
    path('register/', UserRegister.as_view(), name='register'),
    path('login/', UserLogin.as_view(), name='login'),
    path('logout/', UserLogout.as_view(), name='logout'),
    path('user/', UserView.as_view(), name='user'),
    path('contact/', ContactView.as_view(), name='contact'),
]