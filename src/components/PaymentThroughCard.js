import React from "react";
import styles from "./PaymentThroughCard.module.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import visaLogo from "../assets/VISALogo.png";
import mastercardLogo from "../assets/mastercardLogo.jpg";
import rupayLogo from "../assets/rupayLogo.png";

function PaymentThroughCard() {
  return (
    <div className={styles.cardContentContainer}>
      <div className={styles.cardContent}>
        <IoCheckmarkCircleOutline className={styles.cardCheckmark} />
        <div className={styles.cardDetails}>
          <p>Add Credit/Debit/ATM Card</p>
          <div className={styles.cardLogos}>
            <div className={styles.logoContainer} style={{ width: "3rem" }}>
              <img src={visaLogo} className={styles.visaLogo} />
            </div>
            <div className={styles.logoContainer}>
              <img src={mastercardLogo} className={styles.mastercardLogo} />
            </div>
            <div className={styles.logoContainer}>
              <img src={rupayLogo} className={styles.rupayLogo} />
            </div>
          </div>
          <div className={styles.cardForm}>
            <input
              type="text"
              placeholder="Name on Card"
              className={styles.nameInput}
            />
            <input
              type="text"
              placeholder="Card Number"
              className={styles.cardInput}
            />
            <div className={styles.expiryAndCVV}>
              <input
                type="text"
                placeholder="Expiry Date(MM/YY)"
                className={styles.expiryInput}
              />
              <input
                type="text"
                placeholder="CVV"
                className={styles.cvvInput}
              />
            </div>
            <input
              type="text"
              placeholder="Nickname for Card(Optional)"
              className={styles.nicknameInput}
            />
            <button className={styles.checkoutButton}>Checkout</button>
          </div>
          <p className={styles.terms}>
            We accept Credit and Debit Cards from Visa, Mastercard, American
            Express, Rupay, Pluxee & Diners.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentThroughCard;
