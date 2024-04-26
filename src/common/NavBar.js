import React, { useState } from "react";
import Logo from "./Logo.js";
import styles from "./NavBar.module.css";
import Modal from "../components/Modal.js";

import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import MyCart from "./MyCart.js";
import { Link } from "react-router-dom";

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
      <Logo />
      {openModal && <Modal isOpen={openModal} onClose={handleClose} />}
      <div className={styles.locationWrapper} onClick={handleOpen}>
        <h3> Delivery in 12 minutes</h3>
        <div className={styles.locationContainer}>
          <p className={styles.location}>Bangalore, Karnataka, India</p>
          <IoMdArrowDropdown className={styles.modalOpenerIcon} />
        </div>
      </div>
      <Link to="/search">
        <div className={styles.searchContainer}>
          <CiSearch className={styles.searchIcon} />
          <div className={styles.searchSuggestions}>
            <p className={`${styles.suggestion} ${styles.text1}`}>
              Search Milk
            </p>
            <p className={`${styles.suggestion} ${styles.text2}`}>
              Search Butter
            </p>
            <p className={`${styles.suggestion} ${styles.text3}`}>
              Search Book
            </p>
            <p className={`${styles.suggestion} ${styles.text4}`}>
              Search Curd
            </p>
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
            <p className={`${styles.suggestion} ${styles.text9}`}>
              Search Rice
            </p>
            <p className={`${styles.suggestion} ${styles.text10}`}>
              Search Pen
            </p>
          </div>
        </div>
      </Link>
      <div className={styles.loginContainer}>
        <p>Login</p>
      </div>
      <MyCart />
    </div>
  );
}

export default NavBar;
