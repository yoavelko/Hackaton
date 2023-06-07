import React from "react";
import postData from "./Post.json"
import PostIntro from "./PostIntro";
function Guide(){
    const [detail, setDetail] = useState(postData.secondHand.guide)
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