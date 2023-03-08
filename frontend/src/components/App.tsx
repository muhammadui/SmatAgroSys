import * as React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/home/Home";
import Login from "../views/auth/login/Login";
import Register from "../views/auth/register/Register";

// Global Style
import "../index.css";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;