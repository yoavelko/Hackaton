import React from "react";
import { Link } from "react-router-dom";
function PostIntro({result}){
    return(
<div>
    <div>
    <Link to={"/PostPage"}>
{result?.header}
</Link>
    </div>
    <div>
{`${result?.username}`}
    </div>
    <div>
{`${result?.category}`}
    </div>
</div>
    )
}
export default PostIntro