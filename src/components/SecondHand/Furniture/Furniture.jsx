import React from "react";
import postData from "../../../post.json" 
import PostIntro from "../../../PostIntro";
function Furniture(){
    const [detail, setDetail] = useState(postData.secondHand.furniture)
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
export default Furniture