import React from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Auth from "./components/Auth";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import Admin from "./pages/Admin";
import AddFees from "./pages/AddFees";
import Invoices from "./pages/Invoices";
import Pay from "./pages/Pay";
import RecList from "./pages/RecList";
import { useStateContex } from "./store/StateProvider";
import { useSelector } from "react-redux";


function App() {

  const { ErrorMessage } = useStateContex();
  
  const { isError } = useSelector((state) => state.auth);


  return (
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
            <Route path="/addFees" element={<AddFees />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/recList" element={<RecList />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/addstudent" element={<AddStudent />} />
          </Routes>
        </div>
 
      </BrowserRouter>
    </div>
  );
}

export default App;
