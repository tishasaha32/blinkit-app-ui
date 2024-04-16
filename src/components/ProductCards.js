import React from "react";
import bread from "../assets/bread.png";
import brownBread from "../assets/brownBread.png";
import butter from "../assets/butter.png";
import cheese from "../assets/cheese.png";
import cheeseCubes from "../assets/cheeseCubes.png";
import curd from "../assets/curd.png";
import dicedCheese from "../assets/dicedCheese.png";
import eggs from "../assets/eggs.png";
import milkBread from "../assets/milkBread.png";
import milk from "../assets/milk.png";
import paneer from "../assets/paneer.png";
import pasteurizedMilk from "../assets/pasteurizedMilk.png";

import styles from "./ProductCards.module.css";

import { MdOutlineTimer } from "react-icons/md";

function ProductCards() {
  const products = [
    {
      id: 1,
      image: bread,
      title: "Britannia 100% Whole Wheat Bread",
      weight: "200g",
      price: "₹55",
      time: "13 MINS",
    },
    {
      id: 2,
      image: butter,
      title: "Amul Salted Butter",
      weight: "200g",
      price: "₹285",
      time: "13 MINS",
    },
    {
      id: 3,
      image: cheese,
      title: "Amul Cheese Slices",
      weight: "200g",
      price: "₹115",
      time: "13 MINS",
    },
    {
      id: 4,
      image: curd,
      title: "Nandini Curd",
      weight: "200g",
      price: "₹26",
      time: "13 MINS",
    },
    {
      id: 5,
      image: milk,
      title: "Nandini Milk",
      weight: "200g",
      price: "₹22",
      time: "13 MINS",
    },
    {
      id: 6,
      image: eggs,
      title: "Jaya White Eggs",
      weight: "200g",
      price: "₹40",
      time: "13 MINS",
    },
    {
      id: 7,
      image: milkBread,
      title: "Britannia 100% Whole Milk Bread",
      weight: "200g",
      price: "₹110",
      time: "13 MINS",
    },
    {
      id: 8,
      image: brownBread,
      title: "Britannia 100% Whole Brown Bread",
      weight: "200g",
      price: "₹85",
      time: "13 MINS",
    },
    {
      id: 9,
      image: cheeseCubes,
      title: "Amul Cheese Cubes",
      weight: "200g",
      price: "₹150",
      time: "13 MINS",
    },
    {
      id: 10,
      image: dicedCheese,
      title: "Amul Diced Cheese Cubes",
      weight: "200g",
      price: "₹275",
      time: "13 MINS",
    },
    {
      id: 11,
      image: paneer,
      title: "Milky Mist paneer",
      weight: "200g",
      price: "₹110",
      time: "13 MINS",
    },
    {
      id: 12,
      image: pasteurizedMilk,
      title: "Nandini Pasteurized Milk",
      weight: "200g",
      price: "₹25",
      time: "13 MINS",
    },
  ];
  return (
    <div>
      <h2 style={{ marginLeft: "8.2rem" }}>Dairy, Bread & Eggs</h2>
      <div className={styles.dairyProductsContainer}>
        {products.map((product) => (
          <div className={styles.dairyProductContainer}>
            <img src={product.image} className={styles.dairyProduct} />
            <div className={styles.timerCountainer}>
              <MdOutlineTimer className={styles.timerIcon} />
              <p className={styles.time}>{product.time}</p>
            </div>
            <p className={styles.productTitle}>{product.title}</p>
            <p className={styles.productWeight}>{product.weight}</p>
            <div className={styles.productPriceAndAddButtonContainer}>
              <p className={styles.productPrice}>{product.price}</p>
              <button className={styles.addButton}> ADD </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCards;
