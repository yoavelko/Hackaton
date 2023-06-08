import React from "react";
import postData from "../../../post.json"
import PostIntro from "../../PostIntro/PostIntro";
import { useState, useContext } from "react";
import "../../PostIntro/Browse.css"
import { SectionContext } from "../../../context/SectionContext";
import { InnerContext } from "../../../context/InnerContext";
import { Link } from "react-router-dom";

function RecycleLocations() {

  const [detail, setDetail] = useState(postData.postData.recycle.locations);
  const { section, setSection } = useContext(SectionContext);
  const { inner, setInner } = useContext(InnerContext);

  setInner("locations");
  setSection("recycle");

  return (

    <div className="posts-container">
      <div className="inner-forums-header">Recycling Locations Forum</div>
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
export default RecycleLocations