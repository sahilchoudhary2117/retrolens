import os

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

        photo = serializer.save()

        edited_path = apply_retro_filter(photo.image.path)

        with open(edited_path, "rb") as image_file:
            photo.edited_image.save(
                os.path.basename(edited_path),
                File(image_file),
                save=True,
            )

        return Response(PhotoSerializer(photo).data, status=201)

    return Response(serializer.errors, status=400)