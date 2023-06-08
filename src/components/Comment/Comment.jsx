import './Comment.css'
import React from 'react';

function Comment({ key, info }) {

    return (

        <div id='comment-component-container'>
            <div id='comment-header'>
                <div><img src={info?.profilepic} alt="" id='comment-img'/></div>
                <div id='comment-username'>{info?.username}</div>
            </div>
            <div id='comment-tachless'>{info?.content}</div>
        </div>
    )
}

export default Comment