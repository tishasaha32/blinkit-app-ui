import React, { useContext, useEffect, useState } from "react";
import Advertisement from "../components/Advertisement.js";
import AdCard from "../components/AdCard.js";
import NavBar from "../common/NavBar.js";
import CategoryWiseProduct from "../components/CategoryWiseProduct.js";
import ProductCards from "../common/ProductCards.js";
import axios from "axios";
import { ProductsContext } from "../context/productsContext.js";

function Home() {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <NavBar />
      <Advertisement />
      <AdCard />
      <CategoryWiseProduct />
      <ProductCards products={products} />
    </div>
  );
}

export default Home;
