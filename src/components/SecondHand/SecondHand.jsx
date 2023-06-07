import React from "react";
import { Link } from "react-router-dom";

function SecondHand(){
return(
    <div>
    <div><Link to={"/Clothing"}>Clothing forum</Link></div>    
    <div><Link to={"/ElectricProducts"}>Electric products forum</Link></div>    
    <div><Link to={"/Furniture"}>Furniture forum</Link></div> 
    </div>
)
}
export default SecondHand