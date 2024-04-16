import React from "react";
import Advertisement from "../components/Advertisement";
import AdCard from "../components/AdCard";
import NavBar from "../common/NavBar";
import CategoryWiseProduct from "../components/CategoryWiseProduct";
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
