import React, { useEffect } from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Auth from "./components/Auth";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import Admin from "./pages/Admin";
import Sidebar from "./components/Sidebar";
import Invoices from "./pages/Invoices";
import Pay from "./pages/Pay";
import RecList from "./pages/RecList";
import { useStateContex } from "./store/StateProvider";
import { useSelector } from "react-redux";

// import { useTheme } from "./utils/useTheme";
// import { ThemeProvider } from "styled-components";
// import ThemeStyle from "./styles/ThemeStyle";
// import useNetwork from "./utils/useNetwork";
// import OfflineMsg from "./components/connectivity/OfflineMsg";

function App() {
  // const theme = useTheme();
  // const { online } = useNetwork();
  const { ErrorMessage } = useStateContex();
  
  const { isError } = useSelector((state) => state.auth);


  return (
    // <ThemeProvider theme={theme}>
    // <>
    // <ThemeStyle />

    <div className="app">
      <BrowserRouter>
        <div className="app__body">
      <div className="error__align">
      <ErrorMessage errorMsg={isError} />
      </div>

          <Routes >
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/recList" element={<RecList />} />
            <Route path="/" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/addstudent" element={<AddStudent />} />
          </Routes>
        </div>
        {/* <BottomNavigation />			 */}
      </BrowserRouter>
    </div>
    // </>
    // </ThemeProvider>
  );
}

export default App;
