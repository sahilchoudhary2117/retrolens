from PIL import Image, ImageEnhance


def apply_bw(image_path):
    image = Image.open(image_path).convert("L")

    image = ImageEnhance.Contrast(image).enhance(1.5)

    return image.convert("RGB")