import React from "react";
import { useNavigate } from "react-router-dom";

import './BasePage.scss';

const BasePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="title" style={{ marginBottom: "60px" }}>Pages</h2>
      <button onClick={() => navigate("catalog")}>Catalog</button>
    </div>
  );
};

export default BasePage;
