import React, { useEffect, useState } from "react";
import NavBar from "../common/NavBar";
import axios from "axios";
import { useParams } from "react-router-dom";

import deliveryBoy from "../assets/deliveryBoy.png";
import bestPrices from "../assets/bestPrices.png";
import wideVariety from "../assets/wideVariety.png";

import styles from "./ProductPage.module.css";
import { MdOutlineTimer } from "react-icons/md";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    console.log(id);
    axios
      .get(`http://localhost:8000/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);
  return (
    <div>
      <NavBar />
      <div className={styles.productContainer}>
        <div className={styles.productImageContainer}>
          <img src={product?.image} className={styles.productImage} />
        </div>
        <div className={styles.productDetails}>
          <h3> {product?.title}</h3>
          <div className={styles.timerCountainer}>
            <MdOutlineTimer className={styles.timerIcon} />
            <p className={styles.time}>{product?.time}</p>
          </div>
          <p className={styles.productWeight}> {product?.weight}</p>
          <div className={styles.productPriceAndAddButtonContainer}>
            <div>
              <p className={styles.productPrice}>MRP {product?.price}</p>
              <p className={styles.taxText}>(inclusive of all taxes)</p>
            </div>
            <button className={styles.addButton}> ADD </button>
          </div>
          <h4> Why shop from blinkit? </h4>
          <div className={styles.whyShopContainer}>
            <img src={deliveryBoy} className={styles.whyShopImage} />
            <div>
              <p style={{ fontSize: "0.9rem" }}>Superfast Delivery</p>
              <p style={{ color: "gray", fontSize: "0.8rem" }}>
                Get your order delivered to your doorstep at the earliest from
                dark stores near you.
              </p>
            </div>
          </div>
          <div className={styles.whyShopContainer}>
            <img src={bestPrices} className={styles.whyShopImage} />
            <div>
              <p style={{ fontSize: "0.9rem" }}>Best Prices & Offers</p>
              <p style={{ color: "gray", fontSize: "0.8rem" }}>
                Best price destination with offers directly from the
                manufacturers.
              </p>
            </div>
          </div>
          <div className={styles.whyShopContainer}>
            <img src={wideVariety} className={styles.whyShopImage} />
            <div>
              <p style={{ fontSize: "0.9rem" }}>Wide Assortment</p>
              <p style={{ color: "gray", fontSize: "0.8rem" }}>
                Choose from 5000+ products across food, personal care, household
                & other categories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
