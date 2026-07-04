import "../styles/loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Processing your photo...</p>
    </div>
  );
}

export default Loader;