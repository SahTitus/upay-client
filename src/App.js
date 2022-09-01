import React from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Profile from "./pages/Profile";
import Auth from "./components/Auth";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Students from "./pages/Students";
import Admin from "./pages/Admin";
import Sidebar from "./components/Sidebar";

// import { useTheme } from "./utils/useTheme";
// import { ThemeProvider } from "styled-components";
// import ThemeStyle from "./styles/ThemeStyle";
// import useNetwork from "./utils/useNetwork";
// import OfflineMsg from "./components/connectivity/OfflineMsg";

function App() {
  // const theme = useTheme();
  // const { online } = useNetwork();

  return (
    // <ThemeProvider theme={theme}>
    // <>
    // <ThemeStyle />

    <div className="app">
      <BrowserRouter>
        <div><Navbar /></div>

        <div className="app__body">
        {/* <div><Navbar /></div> */}
        {/* <Admin /> */}




          <Routes >
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/auth" element={<Auth />} /> */}
            <Route path="/" element={<Admin />} />
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/students" element={<Students />} />
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
