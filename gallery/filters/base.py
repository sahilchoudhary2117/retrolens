from pathlib import Path


def save_filtered_image(image, image_path):
    """
    Saves a processed Pillow image into media/edited/
    and returns the saved file path.
    """

    edited_dir = Path(image_path).parent.parent / "edited"
    edited_dir.mkdir(exist_ok=True)

    output_path = edited_dir / Path(image_path).name

    image.save(output_path)

    return str(output_path)
