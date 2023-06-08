import React from "react";
import postData from "../../../post.json"
import PostIntro from "../../PostIntro/PostIntro";
import { useState, useContext, useEffect } from "react";
import "../../PostIntro/Browse.css"
import { SectionContext } from "../../../context/SectionContext";
import { InnerContext } from "../../../context/InnerContext";
import { Link } from "react-router-dom";
import { IndexContext } from "../../../context/IndexContext";


function RecycleLocations() {

  const [detail, setDetail] = useState(postData.postData.recycle.locations);
  const { section, setSection } = useContext(SectionContext);
  const { inner, setInner } = useContext(InnerContext);
  const [btnStyle, setBtnStyle] = useState('');
  const { userIndex, setUserIndex } = useContext(IndexContext);

  useEffect(()=>{
    if (userIndex === '') {
      setBtnStyle('post-btn-hidden')
    } else {
      setBtnStyle('create-btn')
    }
  }, [])

  setInner("locations");
  setSection("recycle");

  return (

    <div className="posts-container">
      <div className="inner-forums-header">Recycling Locations Forum</div>
      <button id={btnStyle}><Link to='/PostPage'>Create New Post</Link></button>
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