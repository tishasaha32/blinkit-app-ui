import React from "react";
import styles from "./CartModal.module.css";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineTimer } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { MdOutlinePedalBike } from "react-icons/md";
import { RiRedPacketFill } from "react-icons/ri";
import feedingIndiaIcon from "../assets/feedingIndiaIcon.png";

function CartModal({ isOpen, onClose }) {
  return (
    <div className={styles.cartBackdrop} onClick={onClose}>
      <div
        className={styles.cartContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.cartHeader}>
          <h3>My Cart</h3>
          <RxCross2 onClick={onClose} />
        </div>

        <div className={styles.deliveryDetailsAndProductContainer}>
          <div className={styles.deliveryTimeAndQuantity}>
            <MdOutlineTimer className={styles.timerIcon} />
            <div>
              <p className={styles.deliveryTime}>Delivery in </p>
              <p className={styles.quantity}>Shipment of 2 items</p>
            </div>
          </div>
        </div>

        <div className={styles.billDetailsContainer}>
          <p className={styles.billDetailsText}>Bill Details</p>
          <div className={styles.billDetails}>
            <div className={styles.itemTotalContainer}>
              <TiDocumentText />
              <p> Item Total</p>
            </div>
            <div className={styles.productPriceContainer}>
              <p>130</p>
            </div>
          </div>

          <div className={styles.billDetails}>
            <div className={styles.itemTotalContainer}>
              <MdOutlinePedalBike />
              <p> Delivery Charges</p>
            </div>
            <div className={styles.productPriceContainer}>
              <p>130</p>
            </div>
          </div>

          <div className={styles.billDetails}>
            <div className={styles.itemTotalContainer}>
              <RiRedPacketFill />
              <p> Handling Charges</p>
            </div>
            <div className={styles.productPriceContainer}>
              <p>130</p>
            </div>
          </div>

          <div className={styles.grandTotalContainer}>
            <p>Grand Total</p>
            <p>130</p>
          </div>
        </div>

        <div className={styles.feedingIndiaContainer}>
          <img src={feedingIndiaIcon} className={styles.feedingIndiaIcon} />
          <div className={styles.feedingIndiaText}>
            <p style={{ fontWeight: "bold", height: "0.5rem" }}>
              Feeding India donation
            </p>
            <p style={{ fontSize: "0.8rem", color: "#7b7b7b" }}>
              Working towards a malnutrition free India.
            </p>
          </div>
          <div className={styles.checkBoxContainer}>
            <p>₹1</p>
            <input type="checkbox" />
          </div>
        </div>

        <div className={styles.tipContainer}>
          <p style={{ fontWeight: "bold" }}>Tip Your Delivery Partner</p>
          <p style={{ color: "#666666", fontSize: "0.8rem" }}>
            Your kindness means a lot! 100% of your tip will go directly to your
            delivery partner.
          </p>
          <div className={styles.tips}>
            <p className={styles.tip}>😄₹20</p>
            <p className={styles.tip}>😍₹30</p>
            <p className={styles.tip}>🤩₹40</p>
            <p className={styles.tip}>🙏₹50</p>
          </div>
        </div>

        <div className={styles.cancellationContainer}>
          <p style={{ fontWeight: "bold", height: "0.5rem" }}>
            Cancellation Policy
          </p>
          <p style={{ fontSize: "0.8rem", color: "#7b7b7b" }}>
            Orders cannot be cancelled once packed for delivery. In case of
            unexpected delays, a refund will be provided, if applicable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
