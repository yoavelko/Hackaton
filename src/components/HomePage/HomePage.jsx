import React from "react";
import { Link } from "react-router-dom";
function HomePage(){
return(
    <div>
        <div><Link to={"/RecyclePage"}>Recycle forum</Link></div>
        <div><Link to={"/Environment"}>Environment forum</Link></div>
        <div><Link to={"/SecondHand"}>Second-Hand forum</Link></div>
    </div>
)
}
export default HomePage