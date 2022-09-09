import React from 'react'
import styles from "../styles/Invoice.module.css";
import Invoice from '../components/Invoice';

const Invoices = () => {
  return (
    <div className={styles.invoices}>
      
        <Invoice />
    </div>
  )
}

export default Invoices