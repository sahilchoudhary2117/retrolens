import "../styles/card.css";
import { useAuth } from "../context/AuthContext";

function PhotoCard({ photo, onDelete }) {
  const { user } = useAuth();

  function handleDelete() {
    onDelete(photo.id);
  }

  return (
    <div className="photo-card">
      <div className="photo-image">
        <img
          src={`http://127.0.0.1:8000${photo.edited_image}`}
          alt={photo.title}
        />
      </div>

      <div className="photo-info">
        <h3>{photo.title}</h3>

        <p>{photo.description}</p>

        <div className="photo-badges">
          <span className="category">
            📂 {photo.category}
          </span>

          <span className="filter-badge">
            🎞 {photo.filter || "Vintage"}
          </span>
        </div>

        <div className="photo-actions">
          <a
            href={`http://127.0.0.1:8000${photo.edited_image}`}
            target="_blank"
            rel="noreferrer"
            className="view-btn"
          >
            👁 View
          </a>

          {user?.id === photo.owner && (
            <button
              className="delete-btn"
              onClick={handleDelete}
            >
              🗑 Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;