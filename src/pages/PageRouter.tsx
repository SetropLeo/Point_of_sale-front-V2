import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BasePage from "./BasePage/BasePage";
import Catalog from "./Catalog/Catalog";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />} />
        <Route path="catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
