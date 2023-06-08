import React from "react";
import { Link } from "react-router-dom";
import "../PostIntro/SelectionPage.css"
import { SectionContext } from "../../context/SectionContext";
import { InnerContext } from "../../context/InnerContext";
import { useContext } from "react";

function RecyclePage() {

    const {section, setSection} = useContext(SectionContext);
    const {inner, setInner} = useContext(InnerContext);

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
          <div className="link-container">
            <div><Link to={"/Guide"} onClick={handleGuide}>Recycling Guides</Link></div>
            <div><Link to={"/RecycleLocations"} onClick={handleLocations}>Where to Recycle</Link></div>
            <div><Link to={"/Requests"} onClick={handleRequests}>Requests</Link></div>
          </div>
        </div>
    )
}
export default RecyclePage;
