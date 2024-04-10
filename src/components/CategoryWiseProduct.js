import React from "react";
import category1 from "../assets/Category1.png";
import category2 from "../assets/Category2.png";
import category3 from "../assets/Category3.png";
import category4 from "../assets/Category4.png";
import category5 from "../assets/Category5.png";
import category6 from "../assets/Category6.png";
import category7 from "../assets/Category7.png";
import category8 from "../assets/Category8.png";
import category9 from "../assets/Category9.png";
import category10 from "../assets/Category10.png";
import category11 from "../assets/Category11.png";
import category12 from "../assets/Category12.png";
import category13 from "../assets/Category13.png";
import category14 from "../assets/Category14.png";
import category15 from "../assets/Category15.png";
import category16 from "../assets/Category16.png";
import category17 from "../assets/Category17.png";
import category18 from "../assets/Category18.png";
import category19 from "../assets/Category19.png";
import category20 from "../assets/Category20.png";

import styles from "./CategoryWiseProduct.module.css";

function CategoryWiseProduct() {
  return (
    <div>
      <div className={styles.categoryContainer}>
        <img src={category1} className={styles.category} />
        <img src={category2} className={styles.category} />
        <img src={category3} className={styles.category} />
        <img src={category4} className={styles.category} />
        <img src={category5} className={styles.category} />
        <img src={category6} className={styles.category} />
        <img src={category7} className={styles.category} />
        <img src={category8} className={styles.category} />
        <img src={category9} className={styles.category} />
        <img src={category10} className={styles.category} />
      </div>
      <div className={styles.categoryContainer}>
        <img src={category11} className={styles.category} />
        <img src={category12} className={styles.category} />
        <img src={category13} className={styles.category} />
        <img src={category14} className={styles.category} />
        <img src={category15} className={styles.category} />
        <img src={category16} className={styles.category} />
        <img src={category17} className={styles.category} />
        <img src={category18} className={styles.category} />
        <img src={category19} className={styles.category} />
        <img src={category20} className={styles.category} />
      </div>
    </div>
  );
}

export default CategoryWiseProduct;
