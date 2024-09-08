from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import RedirectView
from user_api.views import ContactView  # Import ContactView here

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/contact/', ContactView.as_view(), name='contact'),
    path('api/', include('user_api.urls')),
    path('', RedirectView.as_view(url='/api/user', permanent=False)),  # Redirect to /api/user
]
