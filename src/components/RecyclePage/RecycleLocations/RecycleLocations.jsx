import React from "react";
import json from "./Post.json"
import PostIntro from "./PostIntro";
function RecycleLocations(){
    const [detail, setDetail] = useState(json.postData.secondHand.locations)
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
export default RecycleLocations