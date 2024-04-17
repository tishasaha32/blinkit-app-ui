import React, { useEffect, useState } from "react";
import styles from "./ProductCards.module.css";
import axios from "axios";
import { MdOutlineTimer } from "react-icons/md";
import { Link } from "react-router-dom";

function ProductCards({ inProductPage }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/products").then((response) => {
      setProducts(response.data);
    }, []);
  });
  return (
    <div>
      {!inProductPage && (
        <h2 style={{ paddingLeft: "8.2rem" }}>Fresh recommendations</h2>
      )}
      <div
        className={
          inProductPage
            ? styles.productsContainerProductPage
            : styles.productsContainer
        }
      >
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              key={product.id}
              className={
                inProductPage
                  ? styles.productContainerProductPage
                  : styles.productContainer
              }
            >
              <img
                src={product.image}
                className={
                  inProductPage ? styles.productProductPage : styles.product
                }
              />
              <div
                className={
                  inProductPage
                    ? styles.timerCountainerProductPage
                    : styles.timerCountainer
                }
              >
                <MdOutlineTimer className={styles.timerIcon} />
                <p className={styles.time}>{product.time}</p>
              </div>
              <p
                className={
                  inProductPage
                    ? styles.productTitleProductPage
                    : styles.productTitle
                }
              >
                {product.title}
              </p>
              <p className={styles.productWeight}>{product.weight}</p>
              <div
                className={
                  inProductPage
                    ? styles.productPriceAndAddButtonContainerProductPage
                    : styles.productPriceAndAddButtonContainer
                }
              >
                <p className={styles.productPrice}>{product.price}</p>
                <button className={styles.addButton}> ADD </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductCards;
