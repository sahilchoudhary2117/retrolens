from django.db import models

class Photo(models.Model):

    CATEGORY = [

        ("nature","Nature"),
        ("travel","Travel"),
        ("people","People"),
        ("city","City"),
        ("other","Other")

    ]

    title=models.CharField(max_length=100)

    description=models.TextField()

    image=models.ImageField(upload_to="original/")

    edited_image=models.ImageField(upload_to="edited/", blank=True)

    tags=models.CharField(max_length=200)

    category=models.CharField(
        max_length=20,
        choices=CATEGORY
    )

    created=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title