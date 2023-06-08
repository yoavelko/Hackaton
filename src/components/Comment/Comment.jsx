import './Comment.css'
import React from 'react';

function Comment({ key, info }) {

    return (

        <div id='comment-outer-container'>
            <img id='arrow' src="https://cdn.iconscout.com/icon/free/png-256/free-arrow-bend-left-up-3601635-3002290.png" alt="" />
            <div id='comment-component-container'>
                <div id='comment-header'>
                    <div><img src={info?.profilepic} alt="" id='comment-img' /></div>
                    <div id='comment-username'>{info?.username}</div>
                </div>
                <div id='comment-tachless'>{info?.content}</div>
            </div>
        </div>
    )
}

export default Comment