import React from "react";
import { Link } from "react-router-dom";
import "./PostIntro.css"
function PostIntro({ result }) {
  return (
    <div className="intro-container">
      <div className="intro-header">
        <Link to={"/PostPage"}>{result?.header}</Link>
      </div>
      <div className="intro-info">
      <div>User: {`${result?.username}`}</div>
      <div>Category: {`${result?.category}`}</div>
      </div>
    </div>
  );
}
export default PostIntro;
