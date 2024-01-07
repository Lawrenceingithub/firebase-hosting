import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase-config";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="homepage-container">
      <h1>控制器</h1>
      <div className="homepage">
        <Link to="/expense-tracker">支出計算器</Link>
        <br /> <Link to="/ingredient-tracker">材料增加器</Link>
      </div>

      <button className="homepage-sign-out-button" onClick={signUserOut} style={{marginTop:"20px"}}>
        SIGN OUT
      </button>
    </div>
  );
};
