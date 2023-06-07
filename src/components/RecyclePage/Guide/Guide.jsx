import React from "react";
import postData from "../../../post.json"
import PostIntro from "../../PostIntro/PostIntro";
import { useState } from "react";
function Guide(){
    const [detail, setDetail] = useState(postData.postData.secondHand.guide)
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