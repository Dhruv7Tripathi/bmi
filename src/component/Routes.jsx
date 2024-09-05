import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login";
import SignUp from "./signup";
import React from "react";

const BrowerRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contacts />} /> */}
        {/* <Route path="/features" element={<Features />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default BrowerRoutes;
