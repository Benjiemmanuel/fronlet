import React from "react";
import styles from "../styles/AreaOfFocus.module.css";

const AreaOfFocus = () => {
  return (
    <div className={styles.AreaOfFocuscontainer}>
      <div className={styles.AreaOfFocusContent}>
        <div className={styles.AreaOfFocusHeadingContainer}>
          <div className={styles.heading}>
            <h2>Our Area of Focus</h2>
          </div>
          <div className={styles.textcontainer}>
            <p className={styles.text}>
              In our quest to help make success available to everyone, we have
              initial strategic direction to focus on these five (5) key areas
              at the lab
            </p>
          </div>
        </div>
        <div className={styles.focusList}>
          <div className={styles.focusItemone}>
            <p className={styles.focusIndex}>01</p>
            <p className={styles.focusTitle}>Business Support & Incubation</p>
          </div>
          <div className={styles.focusItem}>
            <p className={styles.focusIndex}>02</p>
            <p className={styles.focusTitle}>Second Focus Area</p>
          </div>
          <div className={styles.focusItem}>
            <p className={styles.focusIndex}>03</p>
            <p className={styles.focusTitle}>Third Focus Area</p>
          </div>
          <div className={styles.focusItem}>
            <p className={styles.focusIndex}>04</p>
            <p className={styles.focusTitle}>Fourth Focus Area</p>
          </div>
          <div className={styles.focusItem}>
            <p className={styles.focusIndex}>05</p>
            <p className={styles.focusTitle}>Fifth Focus Area</p>
          </div>
          <div className={styles.focusItem}>
            <p className={styles.focusIndex}>06</p>
            <p className={styles.focusTitle}>Sixth Focus Area</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaOfFocus;
