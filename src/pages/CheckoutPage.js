import React, { useState } from "react";
import Logo from "../common/Logo";
import styles from "./CheckoutPage.module.css";

import PaymentMethods from "../components/PaymentMethods";
import DeliveryDetails from "../components/DeliveryDetails";

function CheckoutPage() {
  const [inCheckoutPage, setInCheckoutPage] = useState(false);
  return (
    <div className={styles.checkoutPage}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.checkoutContainer}>
        <PaymentMethods />
        <DeliveryDetails inCheckoutPage={true} />
      </div>
    </div>
  );
}

export default CheckoutPage;
