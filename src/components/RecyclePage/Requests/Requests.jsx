import React from "react";
import postData from "../../../post.json"
import PostIntro from "../../PostIntro/PostIntro";
import "../../PostIntro/Browse.css"
import { useState, useContext } from "react";
import { SectionContext } from "../../../context/SectionContext";
import { InnerContext } from "../../../context/InnerContext";

function Requests() {

  const [detail, setDetail] = useState(postData.postData.recycle.requests);
  const {section, setSection} = useContext(SectionContext);
  const {inner, setInner} = useContext(InnerContext);

  setInner("requests");
  setSection("recycle");

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
export default Requests