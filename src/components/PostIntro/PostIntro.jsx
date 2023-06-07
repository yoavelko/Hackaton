import React from "react";
import { Link } from "react-router-dom";
import "./PostIntro.css"
import "../PostIntro/Browse.css"


function PostIntro({ result }) {
  return (
    <div className="intro-container">
        <div className="intro-header">{`${result?.category}`} | <Link to={"/PostPage"}>{result?.header}</Link></div>
      <div className="intro-info">
      <div className="user-pic-container"><img className="intro-user-pic" src={`${result?.profilepic}`}/> <span className="username-intro">User: {`${result?.username}`}</span></div>
      </div>
    </div>
  );
}
export default PostIntro;
