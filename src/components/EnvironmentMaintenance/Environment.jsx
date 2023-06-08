import React from "react";
import { Link } from "react-router-dom";
import "../PostIntro/SelectionPage.css";
import { SectionContext } from "../../context/SectionContext";
import { InnerContext } from "../../context/InnerContext";
import { useContext } from "react";
import "../EnvironmentMaintenance/Environment.css"

function Environment() {

    const {section, setSection} = useContext(SectionContext);
    const {inner, setInner} = useContext(InnerContext);

    function handleTips(params) {
        setSection("environment");
        setInner("tips");
    }

    function handleGeneral() {
        setSection("environment");
        setInner("general");
    }

    return (

        <div className="forum-container">
          <div className="category-header">Forum categories:</div>
          <br />
          <div>
          <div className="link-container">
          <Link to={"/Tips"} onClick={handleTips}><div id="tip-forum-container">Tips forum</div></Link>
          <Link to={"/General"} onClick={handleGeneral}><div id="general-forum-container">General forum</div></Link>
          </div>
          </div>
        </div>
    )
}
export default Environment;
