import React from "react";
import { Link } from "react-router-dom";
import { SectionContext } from "../../context/SectionContext";
import { InnerContext } from "../../context/InnerContext";

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

        <div>
            <div><Link to={"/Tips"} onClick={handleTips}>Tips forum</Link></div>
            <div><Link to={"/General"} onClick={handleGeneral}>General forum</Link></div>
        </div>
    )

}
export default Environment