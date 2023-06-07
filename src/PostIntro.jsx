import React from "react";
import { Link } from "react-router-dom";
import PostPage from "././components/PostPage/PostPage";
function PostIntro({result}){
<div>
    <div>
    <Link to={PostPage}>
{`${result?.header}`}   
</Link>
    </div>
    <div>
{`${result?.username}`}
    </div>
    <div>
{`${result?.category}`}
    </div>
</div>
}
export default PostIntro