import React from "react";
import postData from "../../../post.json"
import PostIntro from "../../PostIntro/PostIntro";
import { useState, useContext, useEffect } from "react";
import "../../PostIntro/Browse.css"
import { SectionContext } from "../../../context/SectionContext";
import { InnerContext } from "../../../context/InnerContext";
import { IndexContext } from "../../../context/IndexContext";
import { Link } from "react-router-dom";

function ElectricProducts() {

  const [detail, setDetail] = useState(postData.postData.secondHand.electric);
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

  setSection("secondHand");
  setInner("electric");

  return (

    <div className="posts-container">
      <div className="inner-forums-header">Environment General Forum</div>
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
export default ElectricProducts