import React, { useContext } from "react";
import styles from "./DeliveryDetails.module.css";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

function DeliveryDetails({ inCheckoutPage }) {
  const { cartProducts } = useContext(CartContext);

  return (
    <div className={styles.deliveryDetailsContainer}>
      {inCheckoutPage ? (
        <p className={styles.deliveryAddress}> Delivery Address </p>
      ) : (
        <p className={styles.deliveryAddress}> Order Summary </p>
      )}
      {inCheckoutPage && <p className={styles.myCart}> My Cart </p>}
      {cartProducts?.map((cartProduct) => {
        return (
          <div key={cartProduct.id} className={styles.cartProductContainer}>
            <p className={styles.cartProductQty}>{cartProduct.qty}</p>
            <img src={cartProduct.image} className={styles.cartProductImage} />
            <div>
              <p className={styles.cartProductTitle}>{cartProduct.title}</p>
              <p className={styles.cartProductWeight}>{cartProduct.weight}</p>
              <p className={styles.cartProductPrice}>₹{cartProduct.price}</p>
            </div>
          </div>
        );
      })}
      {inCheckoutPage && (
        <Link to="/confirmed" className={styles.checkoutButton}>
          <button className={styles.payNowButton}>Pay Now</button>
        </Link>
      )}
    </div>
  );
}

export default DeliveryDetails;
