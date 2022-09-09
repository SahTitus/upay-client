import { Box, Button, CircularProgress } from "@mui/material";
import AdmTranslist from "../components/AdmTranslist";
import AnaCard from "../components/AnaCard";
import styles from "../styles/Admin.module.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUsers } from "../actions/auth";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Table from "../components/table/DataTable";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLocal = JSON.parse(localStorage.getItem("profile"));

  const { users, isLoading } = useSelector((state) => state.auth);

  const amountValues = users.map((user) =>
    user.transData.map((data) => data.amount)
  );

  const transUsers = users.filter((user) => user.transData.length !== 0);
  const sortTransHistory = transUsers
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  console.log(transUsers);

  const schFees = users.map((user) =>
    user.transData.map((data) =>
      data.paymentType === "School Fees" ? data.amount : null
    )
  );
  const depFees = users.map((user) =>
    user.transData.map((data) =>
      data.paymentType === "Departmental Fees" ? data.amount : null
    )
  );

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

  const id = userLocal?.result?._id;

  useEffect(() => {
    if (!id) navigate("/auth");
    dispatch(getUser(id));
  }, []);

  return (
    <div className={styles.admin}>
      <Navbar />
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
          link="/recList"
          type="all"
        />
        <AnaCard
          totalValue={sumEarnings(schFees.flat()).toFixed(2)}
          text="School Fees Total"
          type="schFees"
          link="/recList"
        />
        <AnaCard
          totalValue={sumEarnings(depFees.flat()).toFixed(2)}
          text="Departmental Fees Total"
          type="depFees"
          link="/recList"
        />
      </div>

      <div className={styles.recent__trans}>
        <div>
          <div className={styles.recent__transTop}>
            <p>Recent Transactions</p>
            <Link to="/recList" className={styles.transViewBtn__link}>
              <Button className={styles.transViewBtn}>View All</Button>
            </Link>
          </div>
          {/* <Table data={sortTransHistory} /> */}
          {isLoading ? (
            <div className={styles.loading}>
              {isLoading && (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              )}
              {users.length > 0 && !isLoading && <h3>No data found</h3>}
            </div>
          ) : (
            <>
              <div className={styles.mobile__list}>
                {users.map((user, i) =>
                  user.transData.map((data) => (
                    <AdmTranslist
                      key={i + data.amount}
                      name={user.name}
                      image={data.image}
                      id={124849356}
                      status={data.status === "success" ? true : false}
                      dep={user.program}
                      amount={data.amount}
                      timestamp={data.timestamp}
                    />
                  ))
                )}
              </div>
              <div className={styles.large__list}>
                <AdmTranslist users={sortTransHistory} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
