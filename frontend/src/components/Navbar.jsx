import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">📸 RetroLens</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
      </div>
    </nav>
  );
}

export default Navbar;