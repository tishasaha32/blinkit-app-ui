import React, { useContext, useEffect, useState } from "react";
import styles from "./CartModal.module.css";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineTimer } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { MdOutlinePedalBike } from "react-icons/md";
import { RiRedPacketFill } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";

import feedingIndiaIcon from "../assets/feedingIndiaIcon.png";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";

import emptyCart from "../assets/emptyCart.png";

function CartModal({ isOpen, onClose, total }) {
  const { cartProducts } = useContext(CartContext);
  const tips = [
    { amount: 20, emoji: "😄" },
    { amount: 30, emoji: "😍" },
    { amount: 40, emoji: "🤩" },
    { amount: 50, emoji: "🙏" },
  ];
  const [grandTotal, setGrandTotal] = useState(0);
  const [isDonationChecked, setIsDonationChecked] = useState(false);
  // const [isTipSelected, setIsTipSelected] = useState(false);
  const { handleQtyDecrease, handleQtyIncrease } = useContext(CartContext);
  const deliveryCharge = 30;
  const handlingCharge = 20;

  const handleDonation = () => {
    setIsDonationChecked(!isDonationChecked);
    if (isDonationChecked) {
      setGrandTotal(grandTotal - 1);
    } else {
      setGrandTotal(grandTotal + 1);
    }
  };

  // const handleTip = (amount) => {
  //   setIsTipSelected(!isTipSelected);
  //   if (isTipSelected) {
  //     setGrandTotal(grandTotal - amount);
  //   } else {
  //     setGrandTotal(grandTotal + amount);
  //   }
  // };

  useEffect(() => {
    setGrandTotal(total + deliveryCharge + handlingCharge);
  }, [total]);

  return (
    <div className={styles.cartBackdrop} onClick={onClose}>
      <div
        className={styles.cartContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.cartHeader}>
          <h3>My Cart</h3>
          <RxCross2 onClick={onClose} className={styles.crossIcon} />
        </div>
        {cartProducts.length > 0 && (
          <>
            <div className={styles.deliveryDetailsAndProductContainer}>
              <div className={styles.deliveryTimeAndQuantity}>
                <MdOutlineTimer className={styles.timerIcon} />
                <div>
                  <p className={styles.deliveryTime}>Delivery in 13 MINS</p>
                  <p className={styles.quantity}>
                    Shipment of {cartProducts.length} items
                  </p>
                </div>
              </div>
              <div>
                {cartProducts.map((product) => {
                  return (
                    <div className={styles.productContainer} key={product.id}>
                      <div className={styles.productDetails}>
                        <img
                          src={product.image}
                          className={styles.productImage}
                        />
                        <div>
                          <p className={styles.productName}>{product.title}</p>
                          <p className={styles.productPrice}>
                            ₹{product.price}
                          </p>
                        </div>
                      </div>
                      {product.qty > 0 && (
                        <button className={styles.productCountButton}>
                          <p
                            onClick={() => handleQtyDecrease(product.id)}
                            className={styles.decreaseProductCount}
                          >
                            -
                          </p>
                          <p className={styles.productCount}>{product.qty}</p>
                          <p
                            onClick={() => handleQtyIncrease(product.id)}
                            className={styles.increaseProductCount}
                          >
                            +
                          </p>
                        </button>
                      )}
                    </div>
                  );
                })}
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
                  <p>{total}</p>
                </div>
              </div>

              <div className={styles.billDetails}>
                <div className={styles.itemTotalContainer}>
                  <MdOutlinePedalBike />
                  <p> Delivery Charges</p>
                </div>
                <div className={styles.productPriceContainer}>
                  <p>{deliveryCharge}</p>
                </div>
              </div>

              <div className={styles.billDetails}>
                <div className={styles.itemTotalContainer}>
                  <RiRedPacketFill />
                  <p> Handling Charges</p>
                </div>
                <div className={styles.productPriceContainer}>
                  <p>{handlingCharge}</p>
                </div>
              </div>

              <div className={styles.grandTotalContainer}>
                <p>Grand Total</p>
                <p>{grandTotal}</p>
              </div>
            </div>

            <div className={styles.feedingIndiaContainer}>
              <img src={feedingIndiaIcon} className={styles.feedingIndiaIcon} />
              <div className={styles.feedingIndiaText}>
                <p style={{ fontWeight: "bold" }}>Feeding India donation</p>
                <p style={{ fontSize: "0.8rem", color: "#7b7b7b" }}>
                  Working towards a malnutrition free India.
                </p>
              </div>
              <div
                className={styles.checkBoxContainer}
                onClick={handleDonation}
              >
                <p>₹1</p>
                <input type="checkbox" />
              </div>
            </div>

            <div className={styles.tipContainer}>
              <p style={{ fontWeight: "bold" }}>Tip Your Delivery Partner</p>
              <p style={{ color: "#666666", fontSize: "0.8rem" }}>
                Your kindness means a lot! 100% of your tip will go directly to
                your delivery partner.
              </p>
              <div className={styles.tips}>
                {tips.map((tip) => {
                  return (
                    <p
                      className={styles.tip}
                      key={tip.amount}
                      // onClick={() => handleTip(tip.amount)}
                    >
                      {tip.emoji}₹{tip.amount}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className={styles.cancellationContainer}>
              <p style={{ fontWeight: "bold", paddingBottom: "10px" }}>
                Cancellation Policy
              </p>
              <p style={{ fontSize: "0.8rem", color: "#7b7b7b" }}>
                Orders cannot be cancelled once packed for delivery. In case of
                unexpected delays, a refund will be provided, if applicable.
              </p>
            </div>
            <div className={styles.orderSummary}>
              <div className={styles.locationDetails}>
                <IoLocationOutline />
                <p>Location</p>
                <p>Change</p>
              </div>
              <div className={styles.orderSummaryDetails}>
                <div>
                  <p style={{ fontWeight: "bold" }}>₹{grandTotal}</p>
                  <p style={{ fontSize: "0.8rem" }}>TOTAL</p>
                </div>
                <div className={styles.proceedToPay}>
                  <p>Proceed to Pay</p>
                  <MdArrowForwardIos className={styles.arrowIcon} />
                </div>
              </div>
            </div>
          </>
        )}
        {cartProducts.length === 0 && (
          <>
            <div className={styles.emptyCartContainer}>
              <img src={emptyCart} className={styles.emptyCartImage} />
              <p className={styles.emptyCartText}>
                You don't have any items in your cart
              </p>
              <p className={styles.emptyCartText2}>
                Your favourite items are just a click away
              </p>
              <Link to="/">
                <button className={styles.emptyCartButton} onClick={onClose}>
                  Start Shopping
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;
