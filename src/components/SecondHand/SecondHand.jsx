import React from "react";
import { Link } from "react-router-dom";
import "../PostIntro/SelectionPage.css";

function SecondHand() {
  return (
    <div className="forum-container">
      <div className="link-container">
        <div>
          <Link to={"/Clothing"}>Clothing forum</Link>
        </div>
        <div>
          <Link to={"/ElectricProducts"}>
            Electric products locations forum
          </Link>
        </div>
        <div>
          <Link to={"/Furniture"}>Furniture forum</Link>
        </div>
      </div>
    </div>
  );
}
export default SecondHand;
