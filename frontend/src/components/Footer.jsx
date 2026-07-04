import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>📸 RetroLens</h2>

          <p>
            Turn modern photos into timeless retro memories with
            beautiful vintage filters.
          </p>
        </div>

        <div className="footer-links">

          <div>
            <h3>Quick Links</h3>

            <a href="/">Home</a>

            <a href="/upload">Upload</a>

          </div>

          <div>
            <h3>Filters</h3>

            <span>Vintage</span>

            <span>Sepia</span>

            <span>Black & White</span>

            <span>Warm Film</span>

            <span>VHS</span>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 RetroLens • Built with React & Django

      </div>

    </footer>
  );
}

export default Footer;