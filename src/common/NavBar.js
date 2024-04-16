import React, { useState } from "react";
import blinkitLogo from "../assets/blinkit_logo.png";
import styles from "./NavBar.module.css";
import Modal from "../components/Modal.js";

import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

function NavBar() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.logoContainer}>
        <img src={blinkitLogo} className={styles.blinkitLogo} />
      </div>
      {openModal && <Modal isOpen={openModal} onClose={handleClose} />}
      <div className={styles.locationContainer} onClick={handleOpen}>
        <h3> Delivery in 12 minutes</h3>
        <IoMdArrowDropdown className={styles.modalOpenerIcon} />
      </div>
      <div className={styles.searchContainer}>
        <CiSearch className={styles.searchIcon} />
        <div className={styles.searchSuggestions}>
          <p className={`${styles.suggestion} ${styles.text1}`}>Search Milk</p>
          <p className={`${styles.suggestion} ${styles.text2}`}>
            Search Butter
          </p>
          <p className={`${styles.suggestion} ${styles.text3}`}>Search Book</p>
          <p className={`${styles.suggestion} ${styles.text4}`}>Search Curd</p>
          <p className={`${styles.suggestion} ${styles.text5}`}>
            Search Paneer
          </p>
          <p className={`${styles.suggestion} ${styles.text6}`}>
            Search Tomato
          </p>
          <p className={`${styles.suggestion} ${styles.text7}`}>
            Search Potato
          </p>
          <p className={`${styles.suggestion} ${styles.text8}`}>
            Search Chocolate
          </p>
          <p className={`${styles.suggestion} ${styles.text9}`}>Search Rice</p>
          <p className={`${styles.suggestion} ${styles.text10}`}>Search Pen</p>
        </div>
      </div>
      <div className={styles.loginContainer}>
        <p>Login</p>
      </div>
      <div className={styles.myCartButtonContainer}>
        <button className={styles.myCartButton}>
          <AiOutlineShoppingCart className={styles.myCartIcon} />
          My Cart
        </button>
      </div>
    </div>
  );
}

export default NavBar;
