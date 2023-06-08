import React from "react";
import postData from "../../../post.json"
import PostIntro from "../../PostIntro/PostIntro";
import { useState, useContext } from "react";
import "../../PostIntro/Browse.css"
import { SectionContext } from "../../../context/SectionContext";
import { InnerContext } from "../../../context/InnerContext";
import { Link } from "react-router-dom";

function Clothing() {

  const [detail, setDetail] = useState(postData.postData.secondHand.clothing);
  const { section, setSection } = useContext(SectionContext);
  const { inner, setInner } = useContext(InnerContext);

  setSection("secondHand");
  setInner("clothing");

  return (

    <div className="posts-container">
      <div className="inner-forums-header">Environment General Forum</div>
      <button id="create-btn"><Link to='/PostPage'>Create New Post</Link></button>
      {detail &&
        detail.map((value, index) => (
          <PostIntro
            key={index}
            result={value}
          />
        ))}
    </div>
  )
}
export default Clothing