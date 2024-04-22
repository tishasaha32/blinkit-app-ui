import React from "react";
import Logo from "../common/Logo";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  return (
    <div>
      <div className={styles.logoContainer}>
        <Logo inCheckoutPage={true} />
      </div>
      <div>
        <div>
          <h2>Select Payment Method</h2>
          <div>
            <p>Wallets</p>
            <p>Add Credit or Debit Cards</p>
            <p>Netbanking</p>
            <p>Add New UPI ID</p>
            <p>Cash</p>
            <p>Pay Later</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
