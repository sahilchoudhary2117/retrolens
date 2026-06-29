import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState("nature");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }

  async function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData();

  formData.append("title", title);
  formData.append("description", description);
  formData.append("tags", tags);
  formData.append("category", category);
  formData.append("image", image);

  try {
    const response = await api.post("upload/", formData);

    alert("Photo uploaded successfully!");
    navigate("/"); // Redirect to home page after successful upload

    console.log(response.data);
  } catch (error) {
    console.error(error);
    alert("Upload failed.");
  }
}

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <form onSubmit={handleSubmit}>
        <h1>Upload Photo</h1>

        <input
          type="text"
          placeholder="Photo Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <textarea
          placeholder="Photo Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          cols="50"
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Tags (e.g. nature,sunset,beach)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <br />
        <br />

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

        <br />
        <br />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        <br />
        <br />

        {image && (
          <>
            <h3>Image Preview</h3>

            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              style={{
                width: "300px",
                borderRadius: "12px",
                marginTop: "10px",
              }}
            />
          </>
        )}

        <br />
        <br />

        <h3>Preview Details</h3>

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

        <br />

        <button type="submit">
          Upload Photo
        </button>
      </form>
    </div>
  );
}

export default Upload;