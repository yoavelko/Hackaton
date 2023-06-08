import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {

  return (
    <div id="home-container">
      <div id="greeting-container">
        <h1>Welcome to Envirum!</h1>
        <h3>A dynamic online community dedicated to nurturing and protecting our planet</h3>
        <div className="greet">At Envirum, we bring together passionate environmentalists from all walks of life, uniting our efforts to make a positive impact on the world we share. Join our vibrant community and immerse yourself in thought-provoking discussions, where you can explore innovative ideas and gain valuable insights from fellow members who share your commitment to sustainability. Together, let's work towards creating a greener, healthier, and more sustainable world for current and future generations.</div>
        <div className="greet">Together, let's forge a path towards a greener future. Join us at Envirum and contribute to the global movement of individuals dedicated to preserving our planet's natural beauty and ensuring a sustainable future for all. Together, we have the power to make a difference.</div>
      </div>
      <div id="redirect-header">Browse through our different forums</div>
      <div id="redirect-container">
        <div id="recycle-container" className="redirect-containers">
          <Link to={"/RecyclePage"}><div className="homepage-title" id="recycle-header">Recycle forum</div></Link>
          <div className="home-inner-container">
            <Link to='Guide'><div className="redirect-links">Guides & Tips</div></Link>
            <Link to="RecycleLocations"><div className="redirect-links">Recycling: How and Where</div></Link>
            <Link to="Requests"><div className="redirect-links">Q & A</div></Link>
          </div>
        </div>
        <div className="redirect-containers" id="environment-container">
          <div className="home-inner-container">
            <Link to={"/Environment"}><div className="homepage-title" id="environment-header">Environment forum</div></Link>
            <Link to="General"><div className="redirect-links">General Forum</div></Link>
            <Link to="Tips"><div className="redirect-links">Guides & Tips</div></Link>
          </div>
        </div>
        <div className="redirect-containers" id="second-hand-container">
          <Link to={"/SecondHand"}><div className="homepage-title" id="second-hand-header">Second-Hand forum</div></Link>
          <div className="home-inner-container">
            <Link to="Clothing"><div className="redirect-links">Clothing</div></Link>
            <Link to="ElectricProducts"><div className="redirect-links">Electric Products</div></Link>
            <Link to="Furniture"><div className="redirect-links">Furniture</div></Link>
          </div>
        </div>
      </div>
      <div id="homepage-breaker"></div>
    </div>
  );
}
export default HomePage;

