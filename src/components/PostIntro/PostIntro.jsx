import React from "react";
import { Link } from "react-router-dom";
import "./PostIntro.css"
import "../PostIntro/Browse.css"
import { useContext } from "react";
import { IdContext } from "../../context/IdContext";

function PostIntro({ result }) {

  const { id, setId } = useContext(IdContext);
  

  return (
    <div className="intro-container">
        <div className="intro-header">{`${result?.category}`} | <Link to={"/ViewPost"} onClick={() => setId(result?.id - 1)}>{result?.header}</Link></div>
      <div className="intro-info">
      <div className="user-pic-container"><img className="intro-user-pic" src={`${result?.profilepic}`}/> <span className="username-intro">User: {`${result?.username}`}</span></div>
      </div>
    </div>
  );
}
export default PostIntro;
