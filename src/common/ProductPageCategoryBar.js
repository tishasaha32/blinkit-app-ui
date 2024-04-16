import React from "react";
import styles from "./ProductPageCategoryBar.module.css";

function ProductPageCategoryBar() {
  return (
    <div className={styles.productPageCategoryBar}>
      <div className={styles.categoriesContainer}>
        <div className={styles.categoryContainer}>
          <p className={styles.category}>Vegetables & Fruits</p>
        </div>
        <div className={styles.categoryContainer}>
          <p className={styles.category}>Daily & Breakfast</p>
        </div>
        <div className={styles.categoryContainer}>
          <p className={styles.category}>Munchies</p>
        </div>
        <div className={styles.categoryContainer}>
          <p className={styles.category}>Cold Drinks & Juices</p>
        </div>
        <div className={styles.categoryContainer}>
          <p className={styles.category}>Instant & Frozen Foods</p>
        </div>
        <div className={styles.categoryContainer}>
          <p className={styles.category}>Tea,Coffee & Health Drinks</p>
        </div>
        <div className={styles.categoryContainer}>
          <p className={styles.category}>Bakery & Biscuits</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPageCategoryBar;
