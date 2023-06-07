import React from "react";
import { Link } from "react-router-dom";
import './HomePage.css'


function HomePage() {
    return (
        <div id="container">
            <div><Link to={"/RecyclePage"}>Recycle forum</Link></div>
            <div><Link to={"/Environment"}>Environment forum</Link></div>
            <div><Link to={"/SecondHand"}>Second-Hand forum</Link></div>
        </div>
    )
}
export default HomePage