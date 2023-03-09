import * as React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// Pages
import Home from "../views/home/Home";
import Login from "../views/auth/login/Login";
import Register from "../views/auth/register/Register";
import OTP from "./otp/OTP";
import Dashboard from "../views/dashboard/Dashboard";
import Main from "./main/Main";

// Global Style
import "../index.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {

  return (
    <BrowserRouter>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />

        <Route path="/otp" element={<OTP />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Main />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;