import React from "react";
import Advertisement from "../components/Advertisement.js";
import AdCard from "../components/AdCard.js";
import NavBar from "../common/NavBar.js";
import CategoryWiseProduct from "../components/CategoryWiseProduct.js";
import ProductCards from "../common/ProductCards.js";

function Home() {
  return (
    <div>
      <NavBar />
      <Advertisement />
      <AdCard />
      <CategoryWiseProduct />
      <ProductCards />
    </div>
  );
}

export default Home;
