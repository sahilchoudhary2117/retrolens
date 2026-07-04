import { useEffect, useState } from "react";
import api, { deletePhoto } from "../services/api";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import "../styles/home.css";
import CategoryFilter from "../components/CategoryFilter";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import DeleteModal from "../components/DeleteModal";

function Home() {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    getPhotos();
  }, []);

  async function getPhotos() {
    try {
      const response = await api.get("photos/");
      setPhotos(response.data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  }

  function handleDelete(id) {
    // open confirmation modal
    setSelectedPhoto(id);
    setShowDeleteModal(true);
  }

  async function confirmDelete() {
    try {
      await deletePhoto(selectedPhoto);
      toast.success("Photo deleted successfully!");

      setPhotos((currentPhotos) =>
        currentPhotos.filter((photo) => photo.id !== selectedPhoto)
      );

      setShowDeleteModal(false);
      setSelectedPhoto(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete photo.");
    }
  }

const filteredPhotos = photos.filter((photo) => {
  const matchesSearch = photo.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "all" ||
    photo.category.toLowerCase() === category.toLowerCase();

  return matchesSearch && matchesCategory;
});
 return (
       <div className="home">
      <Navbar />

      <Hero />

      <div className="home-content">

  <div className="gallery-header">

    <div>

      <h2>Latest Retro Photos</h2>

      <p>
        {filteredPhotos.length} Photo
        {filteredPhotos.length !== 1 ? "s" : ""} Available
      </p>

    </div>

  </div>

  <SearchBar
    search={search}
    setSearch={setSearch}
  />

  <CategoryFilter
    category={category}
    setCategory={setCategory}
  />

  {filteredPhotos.length === 0 ? (

    <div className="empty-gallery">

      <h2>📷</h2>

      <h3>No Photos Found</h3>

      <p>
        Upload your first retro photo and start
        building your gallery.
      </p>

    </div>

  ) : (

    <div id="gallery">

      <Gallery
        photos={filteredPhotos}
        onDelete={handleDelete}
      />

    </div>

  )}

      </div>
      <Footer />
        <DeleteModal
      open={showDeleteModal}
      onClose={() => {
        setShowDeleteModal(false);
        setSelectedPhoto(null);
      }}
      onConfirm={confirmDelete}
    />
  </div>
 );

}
export default Home;