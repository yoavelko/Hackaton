import React from "react";
import { Link } from "react-router-dom";
import "../PostIntro/SelectionPage.css";
import { SectionContext } from "../../context/SectionContext";
import { InnerContext } from "../../context/InnerContext";
import { useContext } from "react";
import "../EnvironmentMaintenance/Environment.css"

function Environment() {

    const { section, setSection } = useContext(SectionContext);
    const { inner, setInner } = useContext(InnerContext);

    function handleTips(params) {
        setSection("environment");
        setInner("tips");
    }

    function handleGeneral() {
        setSection("environment");
        setInner("general");
    }

    return (

        <div id="env-page-container">
            <div className="category-header">Environment Sub-Categories:</div>
            <div id="env-inner-container">
                <Link to={"/Tips"} onClick={handleTips}>
                    <div id="env-tip">Tips & Guides</div>
                </Link>
                <Link to={"/General"} onClick={handleGeneral}>
                    <div id="env-general">General Forum</div>
                </Link>
            </div>
        </div>
    )
}
export default Environment;
