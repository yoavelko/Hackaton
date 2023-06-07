import React from "react";
import json from "./Post.json"
import PostIntro from "./PostIntro";
function General(){
    const [detail, setDetail] = useState(json.postData.environment.general)
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
export default General