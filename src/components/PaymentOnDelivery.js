import React, { useState } from "react";
import styles from "./PaymentOnDelivery.module.css";
import paytmLogo from "../assets/paytmLogo.png";
import gpayLogo from "../assets/gpayLogo.png";
import phonpeLogo from "../assets/phonpeLogo.png";
import bhimLogo from "../assets/bhimLogo.png";
import { Link } from "react-router-dom";

function PaymentOnDelivery() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleRadioChange = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className={styles.paymentOnDeliveryContainer}>
      <div className={styles.upiContentContainer}>
        <p className={styles.selectPaymentMethodText}>
          Select Your Payment Method
        </p>

        <div className={styles.upiLogosContainer}>
          {/* Paytm */}
          <input
            type="radio"
            name="paymentMethod"
            checked={selectedMethod === "UPI"}
            onChange={() => handleRadioChange("UPI")}
          />
          <div className={styles.upiLogo}>
            <img src={paytmLogo} className={styles.paytmLogo} alt="Paytm" />
          </div>
          <div className={styles.upiLogo}>
            <img src={gpayLogo} className={styles.gpayLogo} alt="Google Pay" />
          </div>
          <div className={styles.upiLogo}>
            <img src={phonpeLogo} className={styles.phonpeLogo} alt="PhonePe" />
          </div>
          <div className={styles.upiLogo}>
            <img src={bhimLogo} className={styles.bhimLogo} alt="BHIM" />
          </div>
        </div>

        <div className={styles.paymentByCash}>
          <input
            type="radio"
            name="paymentMethod"
            checked={selectedMethod === "Cash"}
            onChange={() => handleRadioChange("Cash")}
          />
          <p>By Cash</p>
        </div>

        {selectedMethod && (
          <div>
            <Link to="/Confirmed">
              <button className={styles.checkoutButton}>Checkout</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentOnDelivery;
