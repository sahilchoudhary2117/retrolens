import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/upload.css";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("nature");
  const [filter, setFilter] = useState("vintage");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }

  async function handleSubmit(e) {
  e.preventDefault();

  setLoading(true);
  if (!image) {
    toast.error("Please select an image to upload.");
    setLoading(false);
    return;
  }

  const formData = new FormData();

  formData.append("title", title);
  formData.append("description", description);
  formData.append("tags", tags);
  formData.append("category", category);
  formData.append("image", image);
  formData.append("filter", filter);

  try {
    const response = await api.post("upload/", formData);

    setLoading(false);

    toast.success("Photo uploaded successfully!");

    setTimeout(() => {
      navigate("/");
    }, 500);

    console.log(response.data);

  } catch (error) {
    console.error(error);

    setLoading(false);

    toast.error("Upload failed.");
  }
}

  return (
<div className="upload-page">    
  <div className="upload-container">
    {loading && <Loader />}
    <form onSubmit={handleSubmit}>
        <h1>Upload Photo</h1>

        <div className="form-group">
  <label className="form-label">
    Photo Title
  </label>

  <input
    type="text"
    placeholder="Photo Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
</div>

        

       <div className="form-group">
  <label className="form-label">
    Description
  </label>

  <textarea
    placeholder="Enter photo description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    rows="4"
  />
</div>

        

     <div className="form-group">
  <label className="form-label">
    Tags
  </label>

  <input
    type="text"
    placeholder="nature, sunset, beach"
    value={tags}
    onChange={(e) => setTags(e.target.value)}
  />
</div>

        

      <div className="form-group">
  <label className="form-label">
    Category
  </label>

  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
  >
    <option value="nature">Nature</option>
    <option value="travel">Travel</option>
    <option value="people">People</option>
    <option value="city">City</option>
    <option value="other">Other</option>
  </select>
</div>

        
<div className="form-group">
  <label className="form-label">
    Choose Filter
  </label>

  <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  >
    <option value="vintage">Vintage</option>
    <option value="sepia">Sepia</option>
    <option value="bw">Black & White</option>
    <option value="warm">Warm Film</option>
    <option value="vhs">VHS</option>
  </select>
</div>
        
<div className="form-group">
  <label className="form-label">
    Select Image
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={handleImageChange}
  />
</div>

        

        <div className="preview-section">
<h2 className="preview-title">
    Live Preview
</h2>
  {image ? (
    <img
      src={URL.createObjectURL(image)}
      alt="Preview"
      className="preview-image"
    />
  ) : (
    <div className="preview-placeholder">
      <span>📷</span>
      <p>No image selected</p>
    </div>
  )}
</div>
        

<h2 className="preview-title">
    Photo Details
</h2>
        <p>
          <strong>Title:</strong> {title}
        </p>

        <p>
          <strong>Description:</strong> {description}
        </p>

        <p>
          <strong>Tags:</strong> {tags}
        </p>

        <p>
          <strong>Category:</strong> {category}
        </p>
<button
  className="upload-btn"
  type="submit"
  disabled={loading}
>        {loading ? "Uploading..." : "Upload Photo"}
        </button>
      </form>
      </div>
    </div>
  );
}

export default Upload;