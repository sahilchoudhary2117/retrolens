from PIL import Image, ImageEnhance
from pathlib import Path


def apply_retro_filter(image_path):
    """
    Apply a simple retro filter to an uploaded image.
    """

    image = Image.open(image_path).convert("RGB")

    # Slightly reduce color saturation
    color = ImageEnhance.Color(image)
    image = color.enhance(0.7)

    # Increase contrast a little
    contrast = ImageEnhance.Contrast(image)
    image = contrast.enhance(1.15)

    # Slightly reduce brightness
    brightness = ImageEnhance.Brightness(image)
    image = brightness.enhance(0.95)

    # Save edited image
    edited_dir = Path(image_path).parent.parent / "edited"
    edited_dir.mkdir(exist_ok=True)

    output_path = edited_dir / Path(image_path).name

    image.save(output_path)

    return str(output_path)