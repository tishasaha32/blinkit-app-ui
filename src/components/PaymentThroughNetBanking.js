import React, { useState } from "react";
import styles from "./PaymentThroughNetBanking.module.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import axisLogo from "../assets/axisLogo.png";
import hdfcLogo from "../assets/hdfcLogo.png";
import canaraLogo from "../assets/canaraLogo.png";
import sbiLogo from "../assets/sbiLogo.png";
import kotakLogo from "../assets/kotakLogo.png";
import bobLogo from "../assets/bobLogo.png";
import pnbLogo from "../assets/pnbLogo.png";
import iciciLogo from "../assets/iciciLogo.png";

function PaymentThroughNetBanking() {
  const [selectedBank, setSelectedBank] = useState(null);

  const handleBankClick = (bank) => {
    setSelectedBank(bank === selectedBank ? null : bank);
  };
  return (
    <div className={styles.netbankingContentContainer}>
      <div className={styles.netbankingContent}>
        <div
          className={
            selectedBank === "AXIS"
              ? styles.selectedBankContainer
              : styles.bankContainer
          }
          onClick={() => handleBankClick("AXIS")}
        >
          <div className={styles.bankImgAndTickLogo}>
            <img src={axisLogo} className={styles.axisLogo} />
            <IoCheckmarkCircleOutline
              className={
                selectedBank === "AXIS"
                  ? styles.selectedNetbankingCheckmark
                  : styles.netbankingCheckmark
              }
            />
          </div>
          <p>AXIS</p>
        </div>
        <div
          className={
            selectedBank === "PNB"
              ? styles.selectedBankContainer
              : styles.bankContainer
          }
          onClick={() => handleBankClick("PNB")}
        >
          <div className={styles.bankImgAndTickLogo}>
            <img src={pnbLogo} className={styles.pnbLogo} />
            <IoCheckmarkCircleOutline
              className={
                selectedBank === "PNB"
                  ? styles.selectedNetbankingCheckmark
                  : styles.netbankingCheckmark
              }
            />
          </div>
          <p>PNB</p>
        </div>
        <div
          className={
            selectedBank === "ICICI"
              ? styles.selectedBankContainer
              : styles.bankContainer
          }
          onClick={() => handleBankClick("ICICI")}
        >
          <div className={styles.bankImgAndTickLogo}>
            <img src={iciciLogo} className={styles.iciciLogo} />
            <IoCheckmarkCircleOutline
              className={
                selectedBank === "ICICI"
                  ? styles.selectedNetbankingCheckmark
                  : styles.netbankingCheckmark
              }
            />
          </div>
          <p>ICICI</p>
        </div>
        <div
          className={
            selectedBank === "SBI"
              ? styles.selectedBankContainer
              : styles.bankContainer
          }
          onClick={() => handleBankClick("SBI")}
        >
          <div className={styles.bankImgAndTickLogo}>
            <img src={sbiLogo} className={styles.sbiLogo} />
            <IoCheckmarkCircleOutline
              className={
                selectedBank === "SBI"
                  ? styles.selectedNetbankingCheckmark
                  : styles.netbankingCheckmark
              }
            />
          </div>
          <p>SBI</p>
        </div>
        <div
          className={
            selectedBank === "KOTAK"
              ? styles.selectedBankContainer
              : styles.bankContainer
          }
          onClick={() => handleBankClick("KOTAK")}
        >
          <div className={styles.bankImgAndTickLogo}>
            <img src={kotakLogo} className={styles.kotakLogo} />
            <IoCheckmarkCircleOutline
              className={
                selectedBank === "KOTAK"
                  ? styles.selectedNetbankingCheckmark
                  : styles.netbankingCheckmark
              }
            />
          </div>
          <p>KOTAK</p>
        </div>
        <div
          className={
            selectedBank === "HDFC"
              ? styles.selectedBankContainer
              : styles.bankContainer
          }
          onClick={() => handleBankClick("HDFC")}
        >
          <div className={styles.bankImgAndTickLogo}>
            <img src={hdfcLogo} className={styles.hdfcLogo} />
            <IoCheckmarkCircleOutline
              className={
                selectedBank === "HDFC"
                  ? styles.selectedNetbankingCheckmark
                  : styles.netbankingCheckmark
              }
            />
          </div>
          <p>HDFC</p>
        </div>
        <div
          className={
            selectedBank === "CANARA"
              ? styles.selectedBankContainer
              : styles.bankContainer
          }
          onClick={() => handleBankClick("CANARA")}
        >
          <div className={styles.bankImgAndTickLogo}>
            <img src={canaraLogo} className={styles.canaraLogo} />
            <IoCheckmarkCircleOutline
              className={
                selectedBank === "CANARA"
                  ? styles.selectedNetbankingCheckmark
                  : styles.netbankingCheckmark
              }
            />
          </div>
          <p>CANARA</p>
        </div>
        <div
          className={
            selectedBank === "BOB"
              ? styles.selectedBankContainer
              : styles.bankContainer
          }
          onClick={() => handleBankClick("BOB")}
        >
          <div className={styles.bankImgAndTickLogo}>
            <img src={bobLogo} className={styles.bobLogo} />
            <IoCheckmarkCircleOutline
              className={
                selectedBank === "BOB"
                  ? styles.selectedNetbankingCheckmark
                  : styles.netbankingCheckmark
              }
            />
          </div>
          <p>BOB</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentThroughNetBanking;
