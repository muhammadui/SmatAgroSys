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
import MyFarms from "./farm/MyFarms";
import FAQs from "./faqs/FAQs";
import Forum from "./forum/Forum";
import Reminder from "./reminder/Reminder";

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
          <Route path="my_farms" element={<MyFarms />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="forum" element={<Forum />} />
          <Route path="reminder" element={<Reminder />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;