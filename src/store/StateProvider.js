import { Zoom } from "@mui/material";
import styles from "../styles/Dashboard.module.css";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
// Prepares the data layer
export const StateContext = createContext();

//wrap our app and provide the Data layer
export const StateProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [replyingTo, setReplyingTo] = useState(false);
  const [focus, setFocus] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [amountToPay, setAmountToPay] = useState(0);
  const [type, setType] = useState("");
  const [payData, setPayData] = useState({});
  const [throwError, setThrowError] = useState(false);

  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError?.message) setThrowError(true);
  }, [isError]);

  setTimeout(() => {
    setThrowError(false);
  }, 5000);

  const ErrorMessage = () => {
    return throwError ? (
      <Zoom in="throwError" style={{ transitionDelay: "0ms" }}>
        <div className="error-wrapper">
          <div className="error-container">
            <p>{isError?.message || "Somthing went wrong"}</p>
          </div>
        </div>
      </Zoom>
    ) : null;
  };

  const currentTheme = localStorage.getItem("currentTheme");

  useEffect(() => {
    if (currentTheme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  const setMode = (e) => {
    setDarkMode(e.target.checked);
  };

  return (
    <StateContext.Provider
      value={{
        darkMode,
        focus,
        replyingTo,
        currentId,
        isAdmin,
        amountToPay,
        type,
        payData,
        ErrorMessage,
        setPayData,
        setType,
        setReplyingTo,
        setMode,
        setFocus,
        setCurrentId,
        setIsAdmin,
        setAmountToPay,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

//Pull information from the data layer
export const useStateContex = () => useContext(StateContext);
