import React from "react";
import { Link } from "react-router-dom";
import "../PostIntro/SelectionPage.css";
import { SectionContext } from "../../context/SectionContext";
import { InnerContext } from "../../context/InnerContext";
import { useContext } from "react";
import '../SecondHand/SecondHand.css'

function SecondHand() {

    const { section, setSection } = useContext(SectionContext);
    const { inner, setInner } = useContext(InnerContext);

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

        <div id="second-page-container">
            <div className="category-header">Second-Hand Sub-Categories:</div>
            <div id="second-inner-container">
                <Link to={"/Clothing"} onClick={handleClothing}>
                    <div id="second-clothing">Clothing</div>
                </Link>
                <Link to={"/ElectricProducts"} onClick={handleElectric}>
                    <div id="second-electric">Electric Products</div>
                </Link>
                <Link to={"/Furniture"} onClick={handleFurniture}>
                    <div id="second-furniture">Furniture</div>
                </Link>
            </div>
        </div>
    )
}
export default SecondHand;
