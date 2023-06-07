import React from "react";
import { Link } from "react-router-dom";
import "../PostIntro/SelectionPage.css";

function Environment() {
  return (
    <div className="forum-container">
      <div className="link-container">
        <div>
          <Link to={"/Tips"}>Tips forum</Link>
        </div>
        <div>
          <Link to={"/General"}>General forum</Link>
        </div>
      </div>
    </div>
  );
}
export default Environment;
