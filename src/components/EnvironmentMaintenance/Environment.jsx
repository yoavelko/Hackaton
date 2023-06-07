import React from "react";
import { Link } from "react-router-dom";

function Environment(){
return(

    <div>
    <div><Link to={"/Tips"}>Tips forum</Link></div>    
    <div><Link to={"/General"}>General forum</Link></div> 
    </div>
)

}
export default Environment