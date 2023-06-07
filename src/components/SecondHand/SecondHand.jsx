import React from "react";
import { Link } from "react-router-dom";
import { SectionContext } from "../../context/SectionContext";
import { InnerContext } from "../../context/InnerContext";

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

        <div id="second-hand-page-container">
            <div><Link to={"/Clothing"} onClick={handleClothing}>Clothing</Link></div>
            <div><Link to={"/ElectricProducts"} onClick={handleElectric}>Electric Products</Link></div>
            <div><Link to={"/Furniture"} onClick={handleFurniture}>Furniture</Link></div>
        </div>
    )

}
export default SecondHand