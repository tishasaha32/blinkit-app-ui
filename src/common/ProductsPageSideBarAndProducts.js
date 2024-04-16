import React, { useState } from "react";
import styles from "./ProductsPageSideBarAndProducts.module.css";
import ProductPageProductCards from "./ProductPageProductCards.js";

function ProductsPageSideBarAndProducts() {
  const subCategories = [
    "Vegetables",
    "Fruits",
    "Mango",
    "Melons",
    "Oranges",
    "OtherFruits",
    "OtherVegetables",
    "Seasonal",
    "Flowers & Leaves",
    "Fresh Fruits",
    "Fresh Vegetables",
    "Melons",
    "Oranges",
    "OtherFruits",
    "OtherVegetables",
    "Seasonal",
    "Flowers & Leaves",
    "Fresh Fruits",
    "Fresh Vegetables",
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.sideBarAndProductsContainer}>
      <div className={styles.subCategoriesContainer}>
        {subCategories.map((subCategory, index) => {
          return (
            <div
              key={index}
              className={`${styles.subCategoryContainer} ${
                selectedCategory === subCategory ? styles.selectedCategory : ""
              }`}
              onClick={() => handleCategoryClick(subCategory)}
            >
              <p className={styles.subCategory}>{subCategory}</p>
            </div>
          );
        })}
      </div>
      <div>
        <ProductPageProductCards />
      </div>
    </div>
  );
}

export default ProductsPageSideBarAndProducts;
