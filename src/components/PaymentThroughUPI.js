import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import styles from "./PaymentThroughUPI.module.css";
import paytmLogo from "../assets/paytmLogo.png";
import gpayLogo from "../assets/gpayLogo.png";
import phonpeLogo from "../assets/phonpeLogo.png";
import bhimLogo from "../assets/bhimLogo.png";
import { Link } from "react-router-dom";

function PaymentThroughUPI() {
  return (
    <div className={styles.upiContentContainer}>
      <div className={styles.upiContent}>
        <IoCheckmarkCircleOutline className={styles.upiCheckmark} />
        <div className={styles.upiContainer}>
          <p> Add New UPI </p>
          <div className={styles.upiLogosContainer}>
            <div className={styles.upiLogo}>
              <img src={paytmLogo} className={styles.paytmLogo} />
            </div>
            <div className={styles.upiLogo}>
              <img src={gpayLogo} className={styles.gpayLogo} />
            </div>
            <div className={styles.upiLogo}>
              <img src={phonpeLogo} className={styles.phonpeLogo} />
            </div>
            <div className={styles.upiLogo}>
              <img src={bhimLogo} className={styles.bhimLogo} />
            </div>
          </div>
          <div className={styles.upiForm}>
            <input
              type="text"
              placeholder="example@upi"
              className={styles.upiInput}
            />
            <Link to="/confirmed">
              <button className={styles.checkoutButton}>CheckOut</button>
            </Link>
          </div>
          <p className={styles.upiInfo}>
            The UPI ID is in the format of name/phone number@bankname
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentThroughUPI;
