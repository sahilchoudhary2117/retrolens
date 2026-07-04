import os
from django.contrib.auth.models import User
from .auth_serializers import RegisterSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes

from django.core.files import File

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Photo
from .serializers import PhotoSerializer
from .utils import apply_retro_filter


@api_view(["GET"])
def photo_list(request):
    photos = Photo.objects.all().order_by("-created")
    serializer = PhotoSerializer(photos, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def upload_photo(request):

    serializer = PhotoSerializer(data=request.data)

    if serializer.is_valid():

        photo = serializer.save(owner=request.user)

        edited_path = apply_retro_filter(
    photo.image.path,
    photo.filter,
)

        with open(edited_path, "rb") as image_file:
            photo.edited_image.save(
                os.path.basename(edited_path),
                File(image_file),
                save=True,
            )

        return Response(PhotoSerializer(photo).data, status=201)

    return Response(serializer.errors, status=400)

@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_photo(request, pk):
     try:
        photo = Photo.objects.get(id=pk)

        if photo.owner != request.user:
         return Response(
        {"error": "You can only delete your own photos."},
        status=403
    )

        # Delete image files from disk
        if photo.image:
            photo.image.delete(save=False)

        if photo.edited_image:
            photo.edited_image.delete(save=False)

        # Delete database record
        photo.delete()

        return Response({"message": "Photo deleted successfully."})

     except Photo.DoesNotExist:
        return Response({"error": "Photo not found."}, status=404)
    
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def register(request):

    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()

        refresh = RefreshToken.for_user(user)

        return Response({
            "message": "User registered successfully.",
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }, status=201)

    return Response(serializer.errors, status=400)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def profile(request):
    return Response({
        "id": request.user.id,
        "username": request.user.username,
        "email": request.user.email,
    })


@api_view(["POST"])
def logout(request):
    return Response({"message": "Logged out successfully."})