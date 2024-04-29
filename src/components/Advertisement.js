import React from "react";
import advertisement from "../assets/advertisement.png";
import styles from "./Advertisement.module.css";
import { Link } from "react-router-dom";

function Advertisement() {
  return (
    <div>
      <Link to="/products">
        <img src={advertisement} className={styles.advertisementImg} />
      </Link>
    </div>
  );
}

export default Advertisement;
