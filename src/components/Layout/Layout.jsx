import React from "react";
import { Outlet } from "react-router";
function Layout(){
    return(
        <div>
            <div id="header-container">

            </div>
            <Outlet/>
            <div id="footer-container">

</div>
        </div>
    )
}
export default Layout