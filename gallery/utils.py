from .filters.vintage import apply_vintage
from .filters.sepia import apply_sepia
from .filters.base import save_filtered_image
from .filters.bw import apply_bw
from .filters.warm import apply_warm
from .filters.vhs import apply_vhs


FILTERS = {
    "vintage": apply_vintage,
    "sepia": apply_sepia,
    "bw": apply_bw,
    "warm": apply_warm,
    "vhs": apply_vhs,   
}


def apply_retro_filter(image_path, filter_name):
    filter_function = FILTERS.get(filter_name, apply_vintage)

    image = filter_function(image_path)

    return save_filtered_image(image, image_path)