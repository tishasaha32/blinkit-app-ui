import React, { useState } from "react";
import styles from "./PaymentThroughWallet.module.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import paytmLogo from "../assets/paytmLogo.png";
import mobikwikLogo from "../assets/mobikwikLogo.jpg";

function PaymentThroughWallet() {
  const [selectedWallet, setSelectedWallet] = useState(null);

  const handleWalletClick = (wallet) => {
    setSelectedWallet(wallet === selectedWallet ? null : wallet);
  };

  return (
    <div className={styles.walletContent}>
      <div
        className={
          selectedWallet === "Paytm"
            ? styles.selectedWalletContainer
            : styles.walletContainer
        }
        onClick={() => handleWalletClick("Paytm")}
      >
        <div className={styles.walletImgAndTickLogo}>
          <div className={styles.walletImgContainer}>
            <img src={paytmLogo} className={styles.paytmLogo} alt="Paytm" />
          </div>
          <IoCheckmarkCircleOutline
            className={
              selectedWallet === "Paytm"
                ? styles.walletCheckmark
                : styles.selectedWalletCheckmark
            }
          />
        </div>
        <p>Paytm</p>
        <p className={styles.link}>LINK</p>
      </div>

      <div
        className={
          selectedWallet === "Mobikwik"
            ? styles.selectedWalletContainer
            : styles.walletContainer
        }
        onClick={() => handleWalletClick("Mobikwik")}
      >
        <div className={styles.walletImgAndTickLogo}>
          <div className={styles.walletImgContainer}>
            <img
              src={mobikwikLogo}
              className={styles.mobikwikLogo}
              alt="Mobikwik"
            />
          </div>
          <IoCheckmarkCircleOutline
            className={
              selectedWallet === "Mobikwik"
                ? styles.walletCheckmark
                : styles.selectedWalletCheckmark
            }
          />
        </div>
        <p>Mobikwik</p>
        <p className={styles.link}>LINK</p>
      </div>
    </div>
  );
}

export default PaymentThroughWallet;
