import React from "react";
import { Link } from "react-router-dom";
import "./PostIntro.css"
import { useContext } from "react";
import { IdContext } from "../../context/IdContext";

function PostIntro({ result }) {

    const { id, setId } = useContext(IdContext);

    return (
        <div className="intro-container">
            <div className="intro-header">
                <Link to={"/ViewPost"} onClick={() => setId(result?.id-1)}>{result?.header}</Link>
            </div>
            <div className="intro-info">
                <div>User: {`${result?.username}`}</div>
                <div>Category: {`${result?.category}`}</div>
            </div>
        </div>
    );
}
export default PostIntro;
