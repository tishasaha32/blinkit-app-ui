import React from "react";
import styles from "./Modal.module.css";
import { RxCross2 } from "react-icons/rx";
import useLocation from "../hooks/useLocation";

function Modal({ isOpen, onClose }) {
  const location = useLocation();

  const handleLocation = () => {
    console.log(location);
  };
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.changeLocationConatiner}>
          <p>Change Location</p>
          <RxCross2 onClick={onClose} className={styles.crossIcon} />
        </div>
        <div className={styles.detectLocationconatiner}>
          <button
            onClick={handleLocation}
            className={styles.detectLocationButton}
          >
            Detect my location
          </button>
          <button className={styles.orButton}>or</button>
          <button className={styles.searchLocationButton}>
            search delivery location
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
