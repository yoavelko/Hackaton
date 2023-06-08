import React from "react";
import postData from "../../../post.json"
import PostIntro from "../../PostIntro/PostIntro";
import "../../PostIntro/Browse.css";
import { useState, useContext, useEffect } from "react";
import { SectionContext } from "../../../context/SectionContext";
import { InnerContext } from "../../../context/InnerContext";
import { Link } from "react-router-dom";
import { IndexContext } from "../../../context/IndexContext";


function Guide() {

  const [detail, setDetail] = useState(postData.postData.recycle.guide);
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

  setInner("guide");
  setSection("recycle");

  return (

    <div className="posts-container">
      <div className="inner-forums-header">Recycle Tips & Guides</div>
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
export default Guide