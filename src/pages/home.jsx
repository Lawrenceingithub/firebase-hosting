import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
        <Link to="/expense-tracker">支出計算器</Link><br/>
        <Link to="/expense-tracker">成本計算器</Link>
    </div>
  );
};
