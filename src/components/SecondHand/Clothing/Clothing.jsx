import React from "react";
import postData from "../../../post.json"
import PostIntro from "../../../PostIntro";
function Clothing(){
    const [detail, setDetail] = useState(postData.secondHand.clothing)
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
export default Clothing