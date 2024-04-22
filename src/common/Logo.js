import React from "react";
import blinkitLogo from "../assets/blinkit_logo.png";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo({ inCheckoutPage }) {
  return (
    <div>
      <Link to="/">
        <div
          className={
            inCheckoutPage
              ? styles.logoContainerInCheckoutPage
              : styles.logoContainer
          }
        >
          <img src={blinkitLogo} className={styles.blinkitLogo} />
        </div>
      </Link>
    </div>
  );
}

export default Logo;
