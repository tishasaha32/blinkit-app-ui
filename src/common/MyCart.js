import React, { useState } from "react";
import styles from "./MyCart.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartModal from "../components/CartModal.js";

function MyCart() {
  const [openCartModal, setOpenCartModal] = useState(false);
  const handleCartOpen = () => {
    setOpenCartModal(true);
  };

  const handleCartClose = () => {
    setOpenCartModal(false);
  };
  return (
    <div>
      {openCartModal && (
        <CartModal isOpen={openCartModal} onClose={handleCartClose} />
      )}
      <div className={styles.myCartButtonContainer} onClick={handleCartOpen}>
        <button className={styles.myCartButton}>
          <AiOutlineShoppingCart className={styles.myCartIcon} />
          My Cart
        </button>
      </div>
    </div>
  );
}

export default MyCart;
