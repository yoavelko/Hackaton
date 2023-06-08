import React from "react";
import { Link } from "react-router-dom";
import "../PostIntro/SelectionPage.css";
import { SectionContext } from "../../context/SectionContext";
import { InnerContext } from "../../context/InnerContext";
import { useContext } from "react";
import "../RecyclePage/RecyclePage.css";

function RecyclePage() {
  const { section, setSection } = useContext(SectionContext);
  const { inner, setInner } = useContext(InnerContext);

  function handleGuide() {
    setSection("recycle");
    setInner("guide");
  }

  function handleLocations() {
    setSection("recycle");
    setInner("locations");
  }

  function handleRequests() {
    setSection("recycle");
    setInner("requests");
  }

  return (
    <div className="forum-container">
      <div className="category-header">Forum categories:</div>
      <br />
      <div className="link-container">
        <Link to={"/Guide"} onClick={handleGuide}>
          <div id="recycling-forum-container">Recycling Guides</div>
        </Link>
        <Link to={"/RecycleLocations"} onClick={handleLocations}>
          {" "}
          <div id="location-forum-container"> Where to Recycle</div>
        </Link>
        <Link to={"/Requests"} onClick={handleRequests}>
          <div id="requests-forum-container">Requessts</div>
        </Link>
      </div>
    </div>
  );
}
export default RecyclePage;
