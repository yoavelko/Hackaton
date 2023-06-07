import React from "react";
import json from "./Post.json"
import PostIntro from "./PostIntro";
function Guide(){
    const [detail, setDetail] = useState(json.postData.secondHand.guide)
    return(
        <div>
            <div id="post-container">
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
export default Guide