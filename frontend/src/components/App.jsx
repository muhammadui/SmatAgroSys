import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/home/Home";

// Global Style
import "../index.css";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;