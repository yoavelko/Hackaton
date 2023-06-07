import React from "react";
import postData from "./Post.json"
import PostIntro from "./PostIntro";
function Tips(){
    const [detail, setDetail] = useState(postData.environment.tips)
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
export default Tips