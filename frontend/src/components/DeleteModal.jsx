import "../styles/deleteModal.css";

function DeleteModal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="delete-modal">

        <h2>🗑 Delete Photo</h2>

        <p>
          Are you sure you want to delete this photo?
          <br />
          This action cannot be undone.
        </p>

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="confirm-btn"
            onClick={onConfirm}
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default DeleteModal;