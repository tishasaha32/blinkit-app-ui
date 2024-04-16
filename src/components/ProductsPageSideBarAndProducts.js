import React from "react";
import styles from "./ProductsPageSideBarAndProducts.module.css";
import ProductCards from "./ProductCards.js";

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
  return (
    <div className={styles.sideBarAndProductsContainer}>
      <div className={styles.subCategoriesContainer}>
        {subCategories.map((subCategory) => {
          return (
            <div className={styles.subCategoryContainer}>
              <p className={styles.subCategory}>{subCategory}</p>
            </div>
          );
        })}
      </div>
      {/* <div className={styles.products}>
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
        <ProductCards />
      </div> */}
    </div>
  );
}

export default ProductsPageSideBarAndProducts;
