import React, { useContext } from "react";
import styles from "./OrderConfirmed.module.css";
import DeliveryDetails from "../components/DeliveryDetails";
import Logo from "../common/Logo";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/productsContext";
import { CartContext } from "../context/cartContext";
import productList from "../helper/products";

function OrderConfirmed() {
  const { products, setProducts } = useContext(ProductsContext);
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const handleShopAgain = () => {
    setCartProducts([]);
    localStorage.setItem("cartProducts", JSON.stringify([]));
    const newProducts = productList.map((product) => {
      if (product.qty > 0) product.qty = 0;
    });
    setProducts(productList);
    localStorage.setItem("products", JSON.stringify(productList));
  };
  return (
    <div>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.orderConfirmedContainer}>
        <div className={styles.orderConfirmed}>
          <h1>Thank you for your Purchase!</h1>
          <h3>Your order will be delivered shortly.</h3>
          <Link to="/">
            <button
              className={styles.shopAgainButton}
              onClick={() => handleShopAgain()}
            >
              Shop Again
            </button>
          </Link>
        </div>
        <DeliveryDetails />
      </div>
    </div>
  );
}

export default OrderConfirmed;
