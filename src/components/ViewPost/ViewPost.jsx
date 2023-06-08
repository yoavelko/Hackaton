import './viewPost.css'
import { useContext, useState, useEffect } from 'react'
import { IdContext } from '../../context/IdContext'
import { InnerContext } from '../../context/InnerContext'
import { SectionContext } from '../../context/SectionContext'
import { IndexContext } from '../../context/IndexContext'
import postData from '../../post.json'
import userData from '../../user.json'
import Comment from '../Comment/Comment'

function ViewPost() {

    const { id, setId } = useContext(IdContext);
    const { inner, setInner } = useContext(InnerContext);
    const { section, setSection } = useContext(SectionContext);
    const { userIndex, setUserIndex } = useContext(IndexContext);
    const [commentValue, setCommentValue] = useState('');
    const [renderer, setRenderer] = useState(false)

    useEffect(()=>{
    }, [renderer])

    function handleComment() {
        postData.postData[section][inner][id].comments.push(
            {
                "username": userData.users[userIndex].username,
                "profilepic": userData.users[userIndex].profilepic,
                "content": commentValue
            }
        )
        setRenderer(!renderer)
    }


    return (
        <div id='view-container'>
            <div id='view-box'>
                <div id='view-header'>
                    <div id='post-user-pic'><img id='post-prof-pic' src={postData.postData[section][inner][id].profilepic} alt="" /></div>
                    <div id='post-username'><span id='username-color'>{postData.postData[section][inner][id].username}</span>'s post |</div>
                    <div id='post-title'>{postData.postData[section][inner][id].header}</div>
                </div>
                <div id='view-content-container'>
                    <div id='view-content'>{postData.postData[section][inner][id].content}</div>
                    <div id='view-petition'>{postData.postData[section][inner][id].petition}</div>
                    <div id='view-event'>{postData.postData[section][inner][id].event}</div>
                </div>
            </div>
            <div id='comments-container'>
                {postData?.postData[section][inner][id].comments.map((value, index) => {
                    return <Comment key={index} info={value} />
                })}
            </div>
            <div id='add-comment'>
                <textarea id='comment-content' onChange={(e) => setCommentValue(e.target.value)} />
                <button id='comment-btn' onClick={handleComment}>Add Comment</button>
            </div>

        </div>
    )
}

export default ViewPost