import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import "../styles/navbar.css";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  function handleLogout() {
    logout();

    toast.success("Logged out successfully!");

    navigate("/login");
  }

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        📸 <span>RetroLens</span>
      </Link>

      <div className="nav-links">

        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>

        {user ? (
          <>
            <Link
              to="/upload"
              className={location.pathname === "/upload" ? "active" : ""}
            >
              Upload
            </Link>

            <span className="user-name">
              👤 {user.username}
            </span>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className={location.pathname === "/login" ? "active" : ""}
            >
              Login
            </Link>

            <Link
              to="/register"
              className={location.pathname === "/register" ? "active" : ""}
            >
              Register
            </Link>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;