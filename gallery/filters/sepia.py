from PIL import Image


def apply_sepia(image_path):
    image = Image.open(image_path).convert("RGB")

    width, height = image.size
    pixels = image.load()

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

    return image