import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Capture Moments.</h1>
        <h1>Relive Them in Vintage.</h1>

        <p>
          Upload your photos and transform them into beautiful
          retro memories with cinematic filters.
        </p>

        <div className="hero-buttons">
          <button className="upload-btn">
            Upload Photo
          </button>

          <button className="gallery-btn">
            Explore Gallery
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;