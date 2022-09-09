import React from "react";
import html2pdf from "html2pdf.js";
import styles from "../styles/Invoice.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateContex } from "../store/StateProvider";
// import { Stream } from "@mui/icons-material";

const Invoice = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();

  const { payData } = useStateContex();
  
console.log(payData)

  const download = () => {
    const htmlFormat = document.getElementById("myInvoicePdfDownload");
    const opt = {
      margin: 0,
      filename: `${user.result.name + ".pdf"}`,
      html2canvas: { width: 2300, height: 2000, scale: 2 },
      jsPDF: { unit: "px", format: [1754, 1980] },
    };

    html2pdf()
      .from(htmlFormat)
      .set(opt)
      .toPdf()
      .get("pdf")
      .then(() => {})
      .save();
  };

  return (
    <div className={styles.invoice__container}>
      <div id="myInvoicePdfDownload" className={styles.invoice__container2}>
    <div  className={styles.invoice}>
      <div className={styles.invoice__top}>
        <img src={""} alt="" />
        <h1>UPAY</h1>
      </div>
      <div className={styles.invoice__body}>
        <div className={styles.student__infoContainer}>
          <div className={styles.studentInfo}>
            <p className={styles.studHeadings}>Receipt for</p>
            <p>{user.result?.name}</p>
            <p>{user.result?.email}</p>
            <p>{user.result?.program}</p>
            <p> Level {payData?.level}</p>
          </div>
          <div className={styles.payment__date}>
            <p className={styles.studHeadings}>Payment date</p>
            <p>8/09/2022</p>
          </div>
        </div>
        <div className={styles.payment__infoContainer}>
          <div className={styles.payment__info}>
            <div className={styles.payment__type}>
              <p>Payment type</p>
              <p className={styles.type__text}>{payData?.paymentType}</p>
            </div>
            <div className={styles.payment__amount}>
              <p>Amount paid</p>
              <strong>GHS {parseInt(payData?.amount).toFixed(2)}</strong>
            </div>
          </div>
          <div className={styles.invoice__msgContainer}>
          <p className={styles.invoice__msg}>Thank you</p>
          </div>
        </div>
      </div>
    </div>
   
    </div>
    <div className={styles.downloadButton}>
      <Button className={styles.button}  onClick={download}>Download Invoice</Button>
    </div>
    </div>
  );
};

export default Invoice;
