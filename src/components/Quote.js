import React from "react";
import styles from "../styles/Quote.module.css";

const Quote = () => {
  return (
    <div className={styles.QouteContainer}>
      <div className={styles["quote-content"]}>
        <div>
          <p className={styles["quote-text"]}>
            "Nigeria and Africa have a massive network effect that has not been
            fully utilized. With Nigerians/Africans in every country and
            territory of the world, we can scale an African business to 100+
            countries in a few weeks."
          </p>
          <div className={styles["quote-author"]}>
            <p className={styles["quote-author_name"]}>
              Daniel Izeghs Oratokhai
            </p>
            <p className={styles["quote-author_title"]}>
              Managing Partner at SINC Partners Ltd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
