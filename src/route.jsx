import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import App from "./pages/app";
import Pnp from "./pages/pnp";

function MainRouter() {
  return (
    <HashRouter base="/">
      <Routes>
        <Route path="/thankyou" element={<App />} />
        <Route path="/" element={<Index />} />
        <Route path="/privacyandpolicy" element={<Pnp />} />
      </Routes>
    </HashRouter>
  );
}

export default MainRouter;
