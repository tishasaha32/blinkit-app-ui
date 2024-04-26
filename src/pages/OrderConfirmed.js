import React from "react";
import styles from "./OrderConfirmed.module.css";
import DeliveryDetails from "../components/DeliveryDetails";
import Logo from "../common/Logo";
import { Link } from "react-router-dom";

function OrderConfirmed() {
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
            <button className={styles.shopAgainButton}>Shop Again</button>
          </Link>
        </div>
        <DeliveryDetails />
      </div>
    </div>
  );
}

export default OrderConfirmed;
