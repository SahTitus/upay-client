import React from "react";
import styles from "../styles/Histories.module.css";
import av from "../images/av.svg";

const Histories = ({ failed }) => {
  return (
    <div className={styles.histories}>
      <div className={styles.listItem}>
        <div className={styles.image}>
          <img src={av} alt='oh'/>
        </div>
        <div className={styles.info}>
          <p className={styles.title}>
            Payment <span> Level {200}</span>
          </p>
          {!failed ? (
            <span>Sorry, your payment verification failed, try again</span>
          ) : (
            <span>You have successfully paid an amount of GHS30.00</span>
          )}
          <span className={styles.timestamp}>16 Oct 2022, 10:20AM</span>
        </div>
        <div className={styles.status}>
          <strong>GHS {450}</strong>
          {failed ? (
            <span className={styles.success}>SUCCESS</span>
          ) : (
            <span className={styles.failed}>FAILED</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Histories;
