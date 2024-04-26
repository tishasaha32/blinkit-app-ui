import React from "react";
import babycareCard from "../assets/babycareCard.png";
import petCard from "../assets/petCard.png";
import pharmacyCard from "../assets/pharmacyCard.png";
import printCard from "../assets/printCard.png";
import breakfastCard from "../assets/breakfastCard.png";
import styles from "./AdCard.module.css";
import { Link } from "react-router-dom";

function AdCard() {
  return (
    <Link to="/products">
      <div className={styles.cardContainer}>
        <img src={breakfastCard} className={styles.card} />
        <img src={pharmacyCard} className={styles.card} />
        <img src={printCard} className={styles.card} />
        <img src={petCard} className={styles.card} />
        <img src={babycareCard} className={styles.card} />
      </div>
    </Link>
  );
}

export default AdCard;
