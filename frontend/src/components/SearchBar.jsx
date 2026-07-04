import "../styles/searchbar.css";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <div className="search-box">
        <span className="search-icon">🔍</span>

        <input
          type="text"
          placeholder="Search your retro photos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;