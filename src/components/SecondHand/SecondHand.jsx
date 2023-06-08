import React from "react";
import { Link } from "react-router-dom";
import "../PostIntro/SelectionPage.css";
import { SectionContext } from "../../context/SectionContext";
import { InnerContext } from "../../context/InnerContext";
import { useContext } from "react";
import '../SecondHand/SecondHand.css'

function SecondHand() {

    const {section, setSection} = useContext(SectionContext);
    const {inner, setInner} = useContext(InnerContext);

    function handleClothing() {
        setSection("secondHand");
        setInner("clothing");
    }

    function handleElectric() {
        setSection("secondHand");
        setInner("electric");
    }

    function handleFurniture() {
        setSection("secondHand");
        setInner("furniture");
    }

    return (

        <div className="forum-container">
                    <div className="category-header">Forum categories:</div>
             <br />
           <div className="link-container">
            <Link to={"/Clothing"} onClick={handleClothing}><div id="clothing-forum-container">Clothing</div></Link>
           <Link to={"/ElectricProducts"} onClick={handleElectric}> <div id="electric-forum-container">Electric Products</div></Link>
            <Link to={"/Furniture"} onClick={handleFurniture}><div id="furniture-forum-container">Furniture</div></Link>
           </div>
        </div>
    )
}
export default SecondHand;
