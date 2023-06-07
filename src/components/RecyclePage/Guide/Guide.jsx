import React from "react";
import postData from "../../../post.json"
import PostIntro from "../../PostIntro/PostIntro";
import "../../PostIntro/Browse.css";
import { useState, useContext } from "react";
import { SectionContext } from "../../../context/SectionContext";
import { InnerContext } from "../../../context/InnerContext";

function Guide() {

  const [detail, setDetail] = useState(postData.postData.secondHand.guide);
  const {section, setSection} = useContext(SectionContext);
  const {inner, setInner} = useContext(InnerContext);

  setInner("guide");
  setSection("recycle");

  return (
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