from django.urls import path
from . import views

urlpatterns = [
    path("photos/", views.photo_list),
    path("upload/", views.upload_photo),
]