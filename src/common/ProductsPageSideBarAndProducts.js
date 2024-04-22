import React, { useState } from "react";
import styles from "./ProductsPageSideBarAndProducts.module.css";
import ProductCards from "./ProductCards.js";

function ProductsPageSideBarAndProducts({ products }) {
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
    "Chips",
    "Chocolates",
    "Ice Creams",
    "Grapes",
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
        <ProductCards inProductPage={true} products={products} />
      </div>
    </div>
  );
}

export default ProductsPageSideBarAndProducts;
