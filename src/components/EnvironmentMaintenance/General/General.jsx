import React from "react";
import postData from "../../../post.json"
import PostIntro from "../../PostIntro/PostIntro";
import { useState } from "react";
import "../../PostIntro/Browse.css"
function General() {
  const [detail, setDetail] = useState(postData.postData.environment.general)
  return (
    <div>
      <div className="posts-container">
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