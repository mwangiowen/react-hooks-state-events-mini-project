import React, { useState } from "react";

function CategoryFilter({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Initialize with "All" as the default

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="category-filter">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleCategoryClick(category)}
          // Conditionally apply "selected" class based on the selectedCategory
          className={selectedCategory === category ? "selected" : ""}
        >
          {category}
        </button>
      ))} {/* Close the map() function here */}
    </div>
  );
}

export default CategoryFilter;
