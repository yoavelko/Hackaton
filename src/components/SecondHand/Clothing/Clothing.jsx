import React from "react";
import json from "./Post.json"
import PostIntro from "./PostIntro";
function Furniture(){
    const [detail, setDetail] = useState(json.postData.secondHand.clothing)
    return(
        <div>
            <div id="furniture-container">
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