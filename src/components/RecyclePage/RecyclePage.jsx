import React from "react";
import { Link } from "react-router-dom";
import "../PostIntro/SelectionPage.css"
function RecyclePage() {
  return (
    <div className="forum-container">
      <div className="link-container">
        <div>
          <Link to={"/Guide"}>Guide forum</Link>
        </div>
        <div>
          <Link to={"/RecycleLocations"}>Recycle locations forum</Link>
        </div>
        <div>
          <Link to={"/Requests"}>Requests forum</Link>
        </div>
      </div>
    </div>
  );
}
export default RecyclePage;
