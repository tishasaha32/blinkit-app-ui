import React from "react";
import NavBar from "../common/NavBar";
import ProductPageCategoryBar from "../components/ProductPageCategoryBar";
import ProductsPageSideBarAndProducts from "../components/ProductsPageSideBarAndProducts";

function Products() {
  return (
    <div>
      <div>
        <NavBar />
        <ProductPageCategoryBar />
      </div>
      <ProductsPageSideBarAndProducts />
    </div>
  );
}

export default Products;
