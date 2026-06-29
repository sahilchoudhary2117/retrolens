import { useState } from "react";

function Upload() {
  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    category: "nature",
  });

  function handleImage(e) {
    setImage(e.target.files[0]);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
    console.log(image);

    alert("Next step: We'll upload this data to Django.");
  }

  return (
    <div className="upload-page" style={{ padding: "40px" }}>
      <h1>Upload Your Photo</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Photo Title"
          value={formData.title}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="tags"
          placeholder="Tags (nature,sunset)"
          value={formData.tags}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="nature">Nature</option>
          <option value="travel">Travel</option>
          <option value="people">People</option>
          <option value="city">City</option>
          <option value="other">Other</option>
        </select>

        <br /><br />

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
        />

        <br /><br />

        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            width="300"
          />
        )}

        <br /><br />

        <button type="submit">
          Upload Photo
        </button>

      </form>
    </div>
  );
}

export default Upload;