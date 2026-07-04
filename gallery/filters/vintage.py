from PIL import Image, ImageEnhance, ImageFilter
from pathlib import Path
import random


def apply_vintage(image_path):
    image = Image.open(image_path).convert("RGB")

    width, height = image.size
    pixels = image.load()

    # Strong Sepia Tone
    for y in range(height):
        for x in range(width):
            r, g, b = pixels[x, y]

            tr = int(0.393 * r + 0.769 * g + 0.189 * b)
            tg = int(0.349 * r + 0.686 * g + 0.168 * b)
            tb = int(0.272 * r + 0.534 * g + 0.131 * b)

            pixels[x, y] = (
                min(255, tr),
                min(255, tg),
                min(255, tb),
            )

    # Vintage Look
    image = ImageEnhance.Color(image).enhance(0.75)
    image = ImageEnhance.Contrast(image).enhance(0.85)
    image = ImageEnhance.Brightness(image).enhance(1.08)
    image = ImageEnhance.Sharpness(image).enhance(0.8)

    image = image.filter(ImageFilter.GaussianBlur(0.4))

    pixels = image.load()

    # Film Grain
    for y in range(height):
        for x in range(width):
            r, g, b = pixels[x, y]

            noise = random.randint(-18, 18)

            pixels[x, y] = (
                max(0, min(255, r + noise)),
                max(0, min(255, g + noise)),
                max(0, min(255, b + noise)),
            )

    return image