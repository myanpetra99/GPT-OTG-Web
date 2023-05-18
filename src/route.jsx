import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import App from "./pages/app";

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/thankyou" element={<App/>} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
