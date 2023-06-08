import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div id="Home-container">
      <Link to={"/RecyclePage"}><div id="recycle-header">
      <div id="title">Recycle forum</div>
      </div></Link>
      <Link to={"/Environment"}><div id="enviorment-header">
     <div id="title">Environment forum</div></div></Link>
      <Link to={"/SecondHand"}><div id="second-hand-header">
      <div id="title">Second-Hand forum</div></div></Link>
    </div>
  );
}
export default HomePage;

