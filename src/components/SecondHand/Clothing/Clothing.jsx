import React from "react";
import postData from "../../../post.json"
import PostIntro from "../../PostIntro/PostIntro";
import { useState } from "react";
import "../../PostIntro/Browse.css"
import { SectionContext } from "../../../context/SectionContext";
import { InnerContext } from "../../../context/InnerContext";

function Clothing() {

  const [detail, setDetail] = useState(postData.postData.secondHand.clothing);
  const {section, setSection} = useContext(SectionContext);
  const {inner, setInner} = useContext(InnerContext);

  setInner("recycle");
  setSection("clothing");

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
export default Clothing