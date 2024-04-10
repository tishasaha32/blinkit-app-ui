import React from "react";
import advertisement from "../assets/advertisement.png";
import styles from "./Advertisement.module.css";

function Advertisement() {
  return (
    <div>
      <img src={advertisement} className={styles.advertisementImg} />
    </div>
  );
}

export default Advertisement;
