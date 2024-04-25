import React, { useContext, useEffect, useState } from "react";
import styles from "./MyCart.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartModal from "../components/CartModal.js";
import { CartContext } from "../context/cartContext.js";

function MyCart() {
  const { cartProducts } = useContext(CartContext);
  const calculateTotal = (products) => {
    return products.reduce((acc, product) => {
      return acc + product.price * product.qty;
    }, 0);
  };

  const calculateQty = (products) => {
    return products.reduce((acc, product) => {
      return acc + product.qty;
    }, 0);
  };

  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    const newTotal = calculateTotal(cartProducts);
    const newQty = calculateQty(cartProducts);
    setTotal(newTotal);
    setQty(newQty);
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
          {cartProducts.length === 0 ? (
            "My Cart"
          ) : (
            <div className={styles.myCartWithProducts}>
              <p>{qty} items</p>
              <p>₹ {total}</p>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default MyCart;
