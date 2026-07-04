import Masonry from "react-masonry-css";
import PhotoCard from "./PhotoCard";
import "../styles/gallery.css";

function Gallery({ photos, onDelete }) {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-column"
    >
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          onDelete={onDelete}
        />
      ))}
    </Masonry>
  );
}

export default Gallery;