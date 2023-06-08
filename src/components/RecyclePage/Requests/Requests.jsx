import React from "react";
import postData from "../../../post.json"
import PostIntro from "../../PostIntro/PostIntro";
import "../../PostIntro/Browse.css"
import { useState, useContext } from "react";
import { SectionContext } from "../../../context/SectionContext";
import { InnerContext } from "../../../context/InnerContext";
import { Link } from "react-router-dom";

function Requests() {

  const [detail, setDetail] = useState(postData.postData.recycle.requests);
  const { section, setSection } = useContext(SectionContext);
  const { inner, setInner } = useContext(InnerContext);


  setInner("requests");
  setSection("recycle");

  return (

    <div className="posts-container">
      <div className="inner-forums-header">Recycle Requests Forum</div>
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
export default Requests