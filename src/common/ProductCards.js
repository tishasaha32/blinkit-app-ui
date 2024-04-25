import React, { useContext, useEffect, useState } from "react";
import styles from "./ProductCards.module.css";
import { MdOutlineTimer } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

function ProductCards({ inProductPage, products }) {
  const { handleQtyDecrease, handleQtyIncrease } = useContext(CartContext);

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
          <div
            key={product.id}
            className={
              inProductPage
                ? styles.productContainerProductPage
                : styles.productContainer
            }
          >
            <Link
              to={`/products/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
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
              <p
                className={
                  inProductPage
                    ? styles.productWeightProductPage
                    : styles.productWeight
                }
              >
                {product.weight}
              </p>
            </Link>
            <div
              className={
                inProductPage
                  ? styles.productPriceAndAddButtonContainerProductPage
                  : styles.productPriceAndAddButtonContainer
              }
            >
              <p className={styles.productPrice}>₹ {product.price}</p>
              {product.qty === 0 && (
                <button
                  onClick={() => handleQtyIncrease(product.id)}
                  className={styles.addButton}
                >
                  ADD
                </button>
              )}
              {product.qty > 0 && (
                <button className={styles.productCountButton}>
                  <p
                    onClick={() => handleQtyDecrease(product.id)}
                    className={styles.decreaseProductCount}
                  >
                    -
                  </p>
                  <p className={styles.productCount}>{product.qty}</p>
                  <p
                    onClick={() => handleQtyIncrease(product.id)}
                    className={styles.increaseProductCount}
                  >
                    +
                  </p>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCards;
