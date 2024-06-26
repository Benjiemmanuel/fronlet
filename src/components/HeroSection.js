import React from "react";
import Button from "./Button";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h2>
            <span>SINC Partners is a service</span>
            <span>incubation company</span>
          </h2>
          <p>
            Connecting experts in product development and growth marketing
            willing to offer their services to amazing startups in exchange
            for minute equity (usually 0.5% to 2%).
          </p>
          <Button className={styles.button}>SINC With Us</Button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="../assets/onlineimage.jpeg"
          alt="Online"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default HeroSection;
