import React from "react";
import { Link } from "react-router-dom";

function RecyclePage(){
return(

    <div>
    <div><Link to={"/Guide"}>Guide forum</Link></div>    
    <div><Link to={"/RecycleLocations"}>RecycleLocations forum</Link></div>    
    <div><Link to={"/Requests"}>Requests forum</Link></div> 
    </div>
)

}
export default RecyclePage