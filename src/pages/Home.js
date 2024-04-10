import React from "react";
import Advertisement from "../components/Advertisement";
import AdCard from "../components/AdCard";
import NavBar from "../components/NavBar";
import CategoryWiseProduct from "../components/CategoryWiseProduct";

function Home() {
  return (
    <div>
      <NavBar />
      <Advertisement />
      <AdCard />
      <CategoryWiseProduct />
    </div>
  );
}

export default Home;
