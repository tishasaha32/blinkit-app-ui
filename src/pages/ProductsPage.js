import React, { useEffect } from "react";
import NavBar from "../common/NavBar";
import ProductPageCategoryBar from "../common/ProductPageCategoryBar";
import ProductsPageSideBarAndProducts from "../common/ProductsPageSideBarAndProducts";

function Products() {
  return (
    <div>
      <NavBar />
      <ProductPageCategoryBar />
      <ProductsPageSideBarAndProducts />
    </div>
  );
}

export default Products;
