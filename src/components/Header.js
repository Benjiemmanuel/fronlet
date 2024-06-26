import React from "react";
import Button from "./Button";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerOverallContainer}>
      <div className={styles.header}>
        <div className={styles.navAndLogo}>
          <div className={styles.logo}>
            <div className={styles.logoContent}>
              <span className={styles.logoText}>S</span>
              <span className={styles.verticalLine}></span>
              <span className={styles.logoText}>N</span>
              <span className={styles.logoText}>C</span>
            </div>
            <div className={styles.subtitle}>
              <span className={styles.logoPartners}>P</span>
              <span className={styles.logoPartners}>A</span>
              <span className={styles.logoPartners}>R</span>
              <span className={styles.logoPartners}>T</span>
              <span className={styles.logoPartners}>N</span>
              <span className={styles.logoPartners}>E</span>
              <span className={styles.logoPartners}>R</span>
              <span className={styles.logoPartners}>S</span>
            </div>
          </div>
          <div className={styles.nav}>
            <span className={styles.navItem}>About</span>
            <span className={styles.navItem}>SIP</span>
            <span className={styles.navItem}>Studio</span>
            <span className={styles.navItem}>SEEQ</span>
            <span className={styles.navItem}>Platforms</span>
            <span className={styles.navItem}>Initiatives</span>
            <span className={styles.navItem}>More</span>
          </div>
        </div>
        <div className={styles.buttons}>
          <Button className={styles.customButtonOne}>SINC With Us</Button>
          <Button className={styles.customButtonTwo}>Apply to SIP 1.0</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
