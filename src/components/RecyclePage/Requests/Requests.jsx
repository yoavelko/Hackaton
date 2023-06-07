import React from "react";
import json from "./Post.json"
import PostIntro from "./PostIntro";
function Requests(){
    const [detail, setDetail] = useState(json.postData.recycle.requests)
    return(
        <div>
            <div id="posts-container">
            {detail &&  
          detail.map((value, index) => (
            <PostIntro
              key={index}
              result={value}
            />
          ))}
            </div>
        </div>
    )
}
export default Requests