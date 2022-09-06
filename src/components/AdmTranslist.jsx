import React from 'react'
import { Avatar, IconButton } from "@mui/material";
import styles from "../styles/Admin.module.css";
import { Check, Clear } from '@mui/icons-material';
import av from "../images/av.svg";
import moment from "moment";

const AdmTranslist = ({name, amount, status, id, dep, timestamp}) => {
  const date = moment(timestamp).format(" MMMM Do YYYY, h:mm")

  return (
    // <div className={styles.listItem}>
    //     <div className={styles.listItem}>
    //     <Avatar className={styles.listItem__avatar} />
    //     <p className={styles.listItem__name}>{name}</p>
    //     </div>
    //     <p>{id}</p>
    //     <p>{dep}</p>
    //     <div className={styles.listItem}>
    //     {status ? <Check className={styles.listItem__check}  /> : <Clear className={styles.listItem__failed}/>}
    //     </div>
    // </div>
    <div className={styles.histories}>
    <div className={styles.listItem}>
      <div className={styles.image}>
        {/* <img src={av} alt='oh'/> */}
      </div>
      <div className={styles.info}>
        <p className={styles.title}>
          Sah Titus <span> {id}</span>
        </p>
       
        <span className={styles.timestamp}>{date}</span>
      </div>
      <div className={styles.status}>
        <strong>GHS {amount}</strong>
        {status ? (
          <span className={styles.success}><Check /> </span>
        ) : (
          <span className={styles.failed}><Clear /></span>
        )}
      </div>
    </div>
  </div>
  )
}

export default AdmTranslist