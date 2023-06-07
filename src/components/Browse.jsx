import React from "react";
import json from "./Post.json"
import Post from "./Post";
function Browse(){
    const [detail, setDetail] = useState(json.postData)
    return(
        <div>
            <div id="furniture-container">
            {detail &&  
          detail.map((value, index) => (
            <Post
              key={index}
              result={value}
            />
          ))}
            </div>
        </div>
    )



}
export default Browse