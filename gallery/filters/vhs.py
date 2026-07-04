from PIL import Image, ImageEnhance, ImageFilter, ImageDraw
import random


def apply_vhs(image_path):
    image = Image.open(image_path).convert("RGB")

    width, height = image.size

    # Slight blur like VHS
    image = image.filter(ImageFilter.GaussianBlur(0.6))

    # Lower contrast slightly
    image = ImageEnhance.Contrast(image).enhance(0.9)

    # Increase color a bit
    image = ImageEnhance.Color(image).enhance(1.2)

    pixels = image.load()

    # Add random noise
    for y in range(height):
        for x in range(width):
            r, g, b = pixels[x, y]

            noise = random.randint(-12, 12)

            pixels[x, y] = (
                max(0, min(255, r + noise)),
                max(0, min(255, g + noise)),
                max(0, min(255, b + noise)),
            )

    # Add horizontal scan lines
    draw = ImageDraw.Draw(image)

    for y in range(0, height, 4):
        draw.line((0, y, width, y), fill=(25, 25, 25), width=1)

    return image