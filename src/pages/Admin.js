import { Button } from "@mui/material";
import React from "react";
import AdmTranslist from "../components/AdmTranslist";
import AnaCard from "../components/AnaCard";
import styles from "../styles/Admin.module.css";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.topCards}>
        <AnaCard totalValue={7020} text="Total Students" off />
        <AnaCard totalValue={18520} text="Total Earnings" cash />
        <AnaCard totalValue={7020} text="School Fees Total" />
        <AnaCard totalValue={7020} text="Department Fees Total" />
      </div>

      <div className={styles.recent__trans}>
        <div className={styles.recent__transTop}>
          <p>Recent Transactions</p>
          <Button className={styles.transViewBtn}>View All</Button>
        </div>

        <div className={styles.trans__headings}>
          <h4 className={styles.trans__headingsName}>Name</h4>
          <h4 className={styles.trans__headings}>Student</h4>
          <h4 className={styles.trans__headingsId}>ID</h4>
          <h4 className={styles.trans__headingsName}>Department</h4>
          <h4>Status</h4>
        </div>
        <AdmTranslist name='Sah Emmanuel' id={124849356} status={true} dep='Electrical Engineering' />
        <AdmTranslist name='Sah Emmanuel' id={124849356} status={true} dep='Electrical Engineering' />
        <AdmTranslist name='Sah Emmanuel' id={124849356} status={false} dep='Electrical Engineering' />
        <AdmTranslist name='Sah Emmanuel' id={124849356} status={true} dep='Electrical Engineering' />
        <AdmTranslist name='Sah Emmanuel' id={124849356} status={true} dep='Electrical Engineering' />
        <AdmTranslist name='Sah Emmanuel' id={124849356} status={true} dep='Electrical Engineering' />
        <AdmTranslist name='Sah Emmanuel' id={124849356} status={true} dep='Electrical Engineering' />
      </div>
    </div>
  );
};

export default Admin;
