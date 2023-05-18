import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import App from "./pages/app";

function MainRouter() {
  return (
    <Router basename="/GPT-OTG-WEB">
      <Routes>
        <Route path="/thankyou" element={<App />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;
