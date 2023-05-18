import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import App from "./pages/app";

function MainRouter() {
  return (
    <HashRouter base="/">
      <Routes>
        <Route path="/thankyou" element={<App />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </HashRouter>
  );
}

export default MainRouter;
