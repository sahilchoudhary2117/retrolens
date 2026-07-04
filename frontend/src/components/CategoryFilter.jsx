import "../styles/categoryfilter.css";

const categories = [
  { name: "all", icon: "🖼️" },
  { name: "nature", icon: "🌿" },
  { name: "travel", icon: "✈️" },
  { name: "people", icon: "👤" },
  { name: "city", icon: "🏙️" },
  { name: "other", icon: "📦" },
];

function CategoryFilter({ category, setCategory }) {
  return (
    <div className="category-container">
      {categories.map((item) => (
        <button
          key={item.name}
          className={`category-chip ${
            category === item.name ? "active-category" : ""
          }`}
          onClick={() => setCategory(item.name)}
        >
          <span>{item.icon}</span>
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;