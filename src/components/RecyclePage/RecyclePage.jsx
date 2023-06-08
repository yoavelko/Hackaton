import React from "react";
import { Link } from "react-router-dom";
import { SectionContext } from "../../context/SectionContext";
import { InnerContext } from "../../context/InnerContext";
import { useContext } from "react";
import "./RecyclePage.css";

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
    <div id="recycle-page-container">
      <div className="category-header">Recycling Sub-Forums:</div>
      <div id="recycle-inner-container">
        <Link to={"/Guide"} onClick={handleGuide}>
          <div id="recycling-guides">Recycling Guides</div>
        </Link>
        <Link to={"/RecycleLocations"} onClick={handleLocations}>
          {" "}
          <div id="recycle-locations">Where to Recycle</div>
        </Link>
        <Link to={"/Requests"} onClick={handleRequests}>
          <div id="recycle-request">Requessts</div>
        </Link>
      </div>
    </div>
  );
}
export default RecyclePage;
