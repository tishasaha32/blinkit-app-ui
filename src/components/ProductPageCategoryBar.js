import React from "react";
import styles from "./ProductPageCategoryBar.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";

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
        <div className={styles.moreOptions}>
          <p className={styles.category}>More</p>
          <RiArrowDropDownLine className={styles.dropDownArrow} />
        </div>
        {/* <p className={styles.options}>Sweet Tooth</p>
        <p className={styles.options}>Atta, Rice, Dal</p>
        <p className={styles.options}>Dry Fruits, Masala & Oil</p>
        <p className={styles.options}>Sauces & Spreads</p>
        <p className={styles.options}>Chicken, Meat & Fish</p>
        <p className={styles.options}>Paan Corner</p>
        <p className={styles.options}>Organic & Premium</p>
        <p className={styles.options}>Baby Care</p>
        <p className={styles.options}>Pharma & Wellness</p>
        <p className={styles.options}>Cleaning and Essentials</p>
        <p className={styles.options}>Home and Office</p> */}
      </div>
    </div>
  );
}

export default ProductPageCategoryBar;
