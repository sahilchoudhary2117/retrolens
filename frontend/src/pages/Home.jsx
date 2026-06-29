import { useEffect, useState } from "react";
import api from "../services/api";
import Gallery from "../components/Gallery";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
  const [photos, setPhotos] = useState([]);

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

return (
  <div className="home">
    <Navbar />

    <Hero />

    <div style={{ padding: "30px" }}>
      <h2>Total Photos: {photos.length}</h2>

      <Gallery photos={photos} />
    </div>
  </div>
);
}

export default Home;