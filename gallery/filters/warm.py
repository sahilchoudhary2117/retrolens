from PIL import Image, ImageEnhance


def apply_warm(image_path):
    image = Image.open(image_path).convert("RGB")

    pixels = image.load()
    width, height = image.size

    # Add warmth
    for y in range(height):
        for x in range(width):
            r, g, b = pixels[x, y]

            r = min(255, int(r * 1.12))
            g = min(255, int(g * 1.05))
            b = max(0, int(b * 0.90))

            pixels[x, y] = (r, g, b)

    image = ImageEnhance.Color(image).enhance(1.15)
    image = ImageEnhance.Contrast(image).enhance(1.05)
    image = ImageEnhance.Brightness(image).enhance(1.05)

    return image