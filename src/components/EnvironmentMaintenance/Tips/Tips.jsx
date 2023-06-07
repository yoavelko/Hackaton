import React from "react";
import postData from "../../../post.json"
import PostIntro from "../../PostIntro/PostIntro";
import { useState } from "react";
import { SectionContext } from "../../../context/SectionContext";
import { InnerContext } from "../../../context/InnerContext";

function Tips(){

    const [detail, setDetail] = useState(postData.postData.environment.tips);
    const {section, setSection} = useContext(SectionContext);
    const {inner, setInner} = useContext(InnerContext);
  
    setSection("environment");
    setInner("tips");

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