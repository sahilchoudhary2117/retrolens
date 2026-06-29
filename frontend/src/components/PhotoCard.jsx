import "../styles/card.css";

function PhotoCard({ photo }) {
  return (
    <div className="photo-card">
      <img
        src={`http://127.0.0.1:8000${photo.image}`}
        alt={photo.title}
      />

      <div className="photo-info">
        <h3>{photo.title}</h3>

        <p>{photo.description}</p>

        <span className="category">
          {photo.category}
        </span>
      </div>
    </div>
  );
}

export default PhotoCard;