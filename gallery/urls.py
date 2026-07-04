from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("photos/", views.photo_list),
    path("upload/", views.upload_photo),
    path("photos/<int:pk>/", views.delete_photo),
    path("register/", views.register),
    path("login/", TokenObtainPairView.as_view()),
    path("token/refresh/", TokenRefreshView.as_view()),
    path("profile/", views.profile),
    path("logout/", views.logout),
]