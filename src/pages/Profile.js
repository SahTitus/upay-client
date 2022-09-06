// import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
// import { faShare } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Add, ArrowBack, Edit, Logout } from "@mui/icons-material";
import React, { useState } from "react";
import styles from "../styles/Profile.module.css";
// import { Tab, Tabs, Avatar } from "@mui/material";
// import SwipeableViews from "react-swipeable-views";
import { useNavigate } from "react-router-dom";
import { Circle } from "@mui/icons-material";
import { logout } from "../redux/auth";
import { makeStyles } from "@mui/styles";
import { Avatar, Button } from "@mui/material";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  tab: {
    marginLeft: "1px",
  },
  tabL: {
    marginLeft: "10px",
  },
  /// show footer at the top
  showAtTop: {
    position: "",
    top: "",
    zIndex: "10",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    boxShadow: "0px 5px 3px -5px rgba(0, 0, 0, 0.3)",
    backgroundColor: "white",
  },
}));

const Profile = () => {
  const [user, setUser] = useState(false);
  const dispatch = useDispatch();


  const navigate = useNavigate();


  const logOut = () => {
    dispatch(logout());
    // window.location.reload(true);
    navigate('/')
    // closeDrawer()
  };

  return (
    <div className={styles.profile}>
      <div className={styles.profile__header}>
        <ArrowBack onClick={() => navigate(-1)} />
      </div>
      <div className={styles.profile__card}>
        <Avatar className={styles.profile__avatar} />

        <div className={styles.profile__cardInfo}>
          <h4>Champion Bon</h4>
          <p className={styles.profile__cardInfoFollow}>
            <span className={styles.followers}>sah@gmail.com</span>
            <Circle className={styles.bullet} />
            <span className={styles.following}>Electrical Enginnering</span>
          </p>
        </div>
        {user ? (
          <div user className={styles.profile__cardButtons}>
            <button>
              <Edit className={styles.profile__cardButton} />
              Edit Profile
            </button>
            <button>
              {/* <FontAwesomeIcon className="profile__cardButton" icon={faShare} /> */}
              Share
            </button>
          </div>
        ) : (
          <div className={styles.profile__cardButtons}>
            <Button className={styles.profile__cardButton}>
              <Edit className={styles.editIcon} />
              Edit
            </Button>
            <Button onClick={logOut} className={styles.profile__cardButton}>
              <Logout className={styles.logoutIcon}/>
              Log out
            </Button>
          </div>
        )}
      </div>

      <div className="profile__tabs">{/* </SwipeableViews> */}</div>
    </div>
  );
};

export default Profile;
