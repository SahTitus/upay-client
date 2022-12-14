import React from 'react'
import styles from "../styles/Invoice.module.css";
import Invoice from '../components/Invoice';
import { IconButton } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Invoices = () => {
  const navigate = useNavigate();
  
  return (
    <div className={styles.invoices}>
         <div className="arrowBack__navbar">
        {/* <Sidebar toggleSlider={toggleSlider} open={open} setOpen={setOpen} /> */}
        <IconButton onClick={() => navigate(-1)} className={styles.menu}>
          <ArrowBack />
        </IconButton>
      </div>
        <Invoice />
    </div>
  )
}

export default Invoices