import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { mobileStepperClasses } from "@mui/material";

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>WASIF ALEEM</h1>
        {/* <Link to="/about">Explore</Link> */}
      </div>
    </div>
  );
}
