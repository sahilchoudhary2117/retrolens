from rest_framework import serializers
from .models import Photo


class PhotoSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source="owner.id")
    owner_username = serializers.ReadOnlyField(source="owner.username")

    class Meta:
        model = Photo
        fields = "__all__"
        read_only_fields = [
            "edited_image",
            "created",
            "owner",
            "owner_username",
        ]