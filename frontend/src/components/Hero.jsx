import { Link } from "react-router-dom";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-tag">
          📸 AI Powered Retro Photography Studio
        </p>

        <h1>
          Turn Modern Photos Into
          <span> Timeless Retro Memories</span>
        </h1>

        <p className="hero-description">
          Upload your photos and transform them with beautiful
          Vintage, Sepia, Black & White, Warm Film and VHS filters
          in just one click.
        </p>

        <div className="hero-buttons">

          <Link to="/upload" className="hero-btn primary-btn">
            🚀 Upload Photo
          </Link>

          <a href="#gallery" className="hero-btn secondary-btn">
            🖼 Explore Gallery
          </a>

        </div>

        <div className="hero-stats">

          <div className="stat-card">
            <h2>5+</h2>
            <span>Retro Filters</span>
          </div>

          <div className="stat-card">
            <h2>Fast</h2>
            <span>Image Processing</span>
          </div>

          <div className="stat-card">
            <h2>100%</h2>
            <span>Free to Use</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;