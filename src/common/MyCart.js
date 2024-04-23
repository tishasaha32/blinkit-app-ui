import React, { useContext, useEffect, useState } from "react";
import styles from "./MyCart.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartModal from "../components/CartModal.js";
import { CartContext } from "../context/cartContext.js";

function MyCart() {
  const { cartProducts } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const cartTotal = () => {
    cartProducts.forEach((product) => {
      setTotal(total + product.price * product.qty);
    });
  };

  useEffect(() => {
    setTotal(0);
    cartTotal();
  }, [cartProducts]);

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
        <CartModal
          isOpen={openCartModal}
          onClose={handleCartClose}
          total={total}
        />
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
