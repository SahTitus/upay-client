import React from "react";
import styles from "../styles/Dashboard.module.css";
import av from "../images/av.svg";
import { Button } from "@mui/material";
import PaidChart from "../components/PaidChart";
import Histories from "../components/Histories";
const Dashboard = () => {
  // const [showWelcome, setShowWelcome] = useState(true);

// useEffect(() => {
//   setTimeout(() => {
//     setShowWelcome(false);
//   }, 3000);
// }, [])

  return (
    <div className={styles.dashboard}>
    {/* {showWelcome ? ( <div className={styles.upay}> <h1>WELCOME</h1></div>) : ''} */}
      <div className={styles.panel__wrapper}>
        <div className={styles.panel}>
          <div className={styles.toPay}>
            <p>Hi, Sah</p>
            <h4>Payable Fee</h4>
            <strong>GHS 1700</strong>
            <Button className={styles.paynow}> Pay Now</Button>
          </div>
          <img src={av} alt="avatar" className={styles.avatarSvg} />
        </div>
      </div>

      <div className={styles.details}>
        <PaidChart level={100} amountPaid={200} debt={200} percentage={50} />
        <PaidChart level={200} amountPaid={100} debt={200} percentage={30} />
        <PaidChart level={200} amountPaid={240} debt={100} percentage={80} />
        <PaidChart level={400} amountPaid={600} debt={0} percentage={100} />
      </div>
      <div className={styles.histories}>
      <p className={styles.his__topText}>Transaction List</p>
        <Histories failed={true} />
        <Histories failed={true}/>
        <Histories />
        <Histories failed={true}/>
        <Histories failed={false}/>
        <Histories failed={true}/>
      </div>
    </div>
  );
};

export default Dashboard;
