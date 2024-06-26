import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.Layoutcontainer}>
      <div className={styles.section}>
        <p className={styles.Layouttitle}>
          Network of builders helping startup scale
        </p>
        <div className={styles.messageContainer}>
          <div className={styles.messageContents}>
            <h3 className={styles.subtitle}>
              Work with Service Incubators to expedite your time-to-market
            </h3>
            <div className={styles.containersubcontent}>
              <p className={styles.textone}>
                Collaborate with our meticulously chosen service partners, each
                with a vested interest, ensuring a shared commitment to success
                in the game of venture building.
              </p>
              <p className={styles.texttwo}>
                For 7.5% equity, you get a product manager, product designer,
                frontend engineer, software engineer and growth marketer to
                build the MVP of your app or web application and validate it.
              </p>
            </div>
            <div className={styles.learnMoreContainer}>
              <span className={styles.learnMoreText}>Learn More</span>
              <FaArrowRight className={styles.learmoreIcon} />
            </div>
          </div>
          <div className={styles.messageContents}>
            <h3 className={styles.subtitle}>
              Access funding after your MVP is validated
            </h3>
            <div className={styles.containersubcontent}>
              <p className={styles.textone}>
                Startups that have built and validated their product can take
                advantage of the financial resources of the SINC Investors
                Network, elevating their potential for success in the venture
                capital landscape.
              </p>
              <p className={styles.texttwo}>
                Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12
                months
              </p>
            </div>
            <div className={styles.learnMoreContainer}>
              <span className={styles.learnMoreText}>Learn More</span>
              <FaArrowRight className={styles.learmoreIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
