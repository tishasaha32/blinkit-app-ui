import React, { useContext } from "react";
import NavBar from "../common/NavBar";
import ProductPageCategoryBar from "../common/ProductPageCategoryBar";
import ProductsPageSideBarAndProducts from "../common/ProductsPageSideBarAndProducts";
import { ProductsContext } from "../context/productsContext";

function Products() {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <NavBar />
      <ProductPageCategoryBar />
      <ProductsPageSideBarAndProducts products={products} />
    </div>
  );
}

export default Products;
