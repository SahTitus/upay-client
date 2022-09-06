import { Button } from "@mui/material";
import AdmTranslist from "../components/AdmTranslist";
import AnaCard from "../components/AnaCard";
import styles from "../styles/Admin.module.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../actions/auth";

const Admin = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);

  const amountValues = users.map((user) =>
    user.transData.map((data) => data.amount)
  );

  const transUsers = users.filter((user) =>
    user.transData.length !== 0
  );

  console.log(transUsers);



  const schFees = users.map((user) => user.transData.map((data) => data.paymentType === 'School Fees' ? data.amount : null));
  const depFees = users.map((user) => user.transData.map((data) => data.paymentType === 'Departmental Fees' ? data.amount : null ));

  const sumEarnings = (arr = []) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      sum += +el;
    }
    return sum;
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={styles.admin}>
      <div className={styles.topCards}>
        <AnaCard
          link="/students"
          totalValue={users.length}
          text="Total Students"
          off
        />
        <AnaCard
          totalValue={sumEarnings(amountValues.flat()).toFixed(2)}
          text="Total Earnings"
          cash
        />
        <AnaCard totalValue={sumEarnings(schFees.flat()).toFixed(2)} text="School Fees Total" />
        <AnaCard totalValue={sumEarnings(depFees.flat()).toFixed(2)} text="Departmental Fees Total" />
      </div>

      <div className={styles.recent__trans}>
        <div className={styles.recent__transTop}>
          <p>Recent Transactions</p>
          <Button className={styles.transViewBtn}>View All</Button>
        </div>

        <div className={styles.trans__headings}>
          <h4 className={styles.trans__heading}>Name</h4>
          {/* <h4 className={styles.trans__heading}>Student</h4> */}
          <h4 className={styles.trans__heading}>ID</h4>
          <h4 className={styles.trans__heading}>Department</h4>
          <h4>Status</h4>
        </div>
        {transUsers.map((user, i) => user.transData.map(data => 
                <AdmTranslist
                key={i + data.amount}
                name={user.name}
                id={124849356}
                status={data.status === 'success' ? true : false} 
                dep={user.program}
                amount={data.amount}
                timestamp={data.timestamp}
              />
          ))}

      
      </div>
    </div>
  );
};

export default Admin;
