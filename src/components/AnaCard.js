import { Check, Paid } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { PeopleFill, EyeFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styles from "../styles/Admin.module.css";

const AnaCard = ({
  totEarns,
  link,
  off,
  cash,
  text,
  level,
  totalValue,
  percentage,
  debt,
  totStud,
  amPaid,
}) => {
  return (
    <div className={styles.analCard}>
      <div className={styles.info}>
        <h4>
          {off ? "" : "GHS"} {" "}
          {totalValue}
        </h4>

        <p>{text}</p>
        <span>Click here to see details </span>
      </div>
      <div className={styles.analCard__right}>
        {!cash && <PeopleFill className={styles.icon} />}
        {cash && <Paid className={styles.icon} />}
        {link ? (
          <Link to={link}>
            <IconButton className={styles.iconEye__wrapper}>
              <EyeFill className={styles.iconEye} />
            </IconButton>
          </Link>
        ) : (
          <IconButton className={styles.iconEye__wrapper}>
            <EyeFill className={styles.iconEye} />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default AnaCard;
