import React, { useContext, useState } from "react";
import Logo from "../common/Logo";
import MyCart from "../common/MyCart";
import styles from "./SearchPage.module.css";
import { CiSearch } from "react-icons/ci";

import ProductCards from "../common/ProductCards";
import { ProductsContext } from "../context/productsContext";

function SearchPage() {
  const { handleFilteredSearch, filteredProducts } =
    useContext(ProductsContext);
  return (
    <div>
      <div className={styles.searchPageContainer}>
        <Logo />
        <div className={styles.searchInputContainer}>
          <CiSearch className={styles.searchIcon} />
          <input
            className={styles.searchInput}
            placeholder="Search Products"
            autoFocus
            onChange={(e) => handleFilteredSearch(e.target.value)}
          />
        </div>
        <MyCart />
      </div>
      <ProductCards inProductPage={true} products={filteredProducts} />
    </div>
  );
}

export default SearchPage;
