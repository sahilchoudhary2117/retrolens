import { Link } from "react-router-dom";
import "../styles/notfound.css";

function NotFound() {
  return (
    <div className="notfound">

      <div className="notfound-content">

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="home-btn">
          🏠 Back to Home
        </Link>

      </div>

    </div>
  );
}

export default NotFound;