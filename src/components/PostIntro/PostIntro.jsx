import React from "react";
import { Link } from "react-router-dom";
import "../PostIntro/Browse.css"
import { useContext } from "react";
import { IdContext } from "../../context/IdContext";

function PostIntro({ result }) {

  const { id, setId } = useContext(IdContext);


  return (
    <Link to={"/ViewPost"} onClick={() => setId(result?.id - 1)}>
      <div className="intro-container">
        <div className="intro-info">
          <div className="user-pic-container"><img className="intro-user-pic" src={`${result?.profilepic}`} /> <span className="username-intro">{`${result?.username}`}'s</span><div className="intro-header">{`${result?.category}`} | {result?.header}</div></div>
        </div>
      </div>
    </Link>
  );
}
export default PostIntro;
