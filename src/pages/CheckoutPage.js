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
          <div className={styles.paymentMethodsContainer}>
            <p className={styles.paymentMethod}>Wallets</p>
            <p className={styles.paymentMethod}>Add Credit or Debit Cards</p>
            <p className={styles.paymentMethod}>Netbanking</p>
            <p className={styles.paymentMethod}>Add New UPI ID</p>
            <p className={styles.paymentMethod}>Cash</p>
            <p className={styles.paymentMethod}>Pay Later</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
