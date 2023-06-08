import './PostPage.css';
import { useContext, useEffect, useState } from 'react';
import { IndexContext } from '../../context/IndexContext';
import { SectionContext } from "../../context/SectionContext";
import { InnerContext } from "../../context/InnerContext";
import userData from '../../user.json';
import postData from '../../post.json';
import { useNavigate } from 'react-router-dom';


function PostPage() {

    const { userIndex, setUserIndex } = useContext(IndexContext);
    const { section, setSection } = useContext(SectionContext);
    const { inner, setInner } = useContext(InnerContext);
    const [petitionStyle, setPetitionStyle] = useState('petition-hidden');
    const [eventStyle, setEventStyle] = useState('event-hidden');
    const [postContent, setPostContent] = useState('');
    const [petitionContent, setPetitionContent] = useState('');
    const [eventContent, setEventContent] = useState('');
    const [selected, setSelected] = useState('');
    const [postHeader, setPostHeader] = useState('');
    const users = userData.users;
    const navigate = useNavigate();
    const [direction, setDirection] = useState('');
    const [petBtn, setPetBtn] = useState('+');
    const [evnetBtn, setEventBtn] = useState('+');


    function handlePetition() {
        if (petitionStyle === 'petition') {
            setPetitionStyle('petition-hidden');
            setPetBtn('+')
        } else {
            setPetitionStyle('petition');
            setPetBtn('-')
        }
    }

    function handleEvent() {
        if (eventStyle === 'event') {
            setEventStyle('event-hidden');
            setEventBtn('+')
        } else {
            setEventStyle('event');
            setEventBtn('-')
        }
    }

    useEffect(()=>{
        if (inner === "requests") {
            setDirection('/Request')
        }
        if (inner === "guide") {
            setDirection('/Guide')
        }
        if (inner === "locations") {
            setDirection('/RecycleLoctaions')
        }
        if (inner === "furniture") {
            setDirection('/Furniture')
        }
        if (inner === "electric") {
            setDirection('/ElectricProducts')
        }
        if (inner === "clothing") {
            setDirection('/Clothing')
        }
        if (inner === "general") {
            setDirection('/General')
        }
        if (inner === "tips") {
            setDirection('/Tips')
        }
    }, [])

    function handlePost() {
        const postObj = {
            "id": postData.postData[section][inner].length+1,
            "username": users[userIndex].username,
            "profilepic": users[userIndex].profilepic,
            "header": postHeader,
            "category": selected,
            "content": postContent,
            "file": "",
            "like": [],
            "comments": [],
            "petition": petitionContent,
            "signed": [],
            "event": eventContent
        }
        postData.postData[section][inner].push(postObj);
        navigate(direction);
    }


    return (
        <div id='post-container'>
            <div id='post-box'>
                <div id='user-info-container'>
                    <div id='post-user-pic'><img id='post-prof-pic' src={users[userIndex].profilepic} alt="" /></div>
                    <div id='post-username'><span id='username-color'>{users[userIndex].username}</span>'s post</div>
                </div>
                <div id='content-container'>
                    <div id='post-header-container'>
                        <select id='category-select' name="" onChange={(e) => setSelected(e.target.value)}>
                            <option disabled>Choose a category</option>
                            <option value="Question">Question</option>
                            <option value="Request">Request</option>
                            <option value="Post">Post</option>
                        </select>
                        <input id='post-header' type="text" placeholder='Post Title...' onChange={(e) => setPostHeader(e.target.value)}/>
                    </div>
                    <textarea id='post-content' placeholder='Wrtie Something...' onChange={(e) => setPostContent(e.target.value)} />
                    <div className='showers'><button className='post-shower-btn' onClick={handlePetition}>{petBtn}</button> Add a petition to the post</div>
                    <textarea className='petition-event' id={petitionStyle} placeholder='Wrtie Something...' onChange={(e) => setPetitionContent(e.target.value)} />
                    <div className='showers'><button className='post-shower-btn' onClick={handleEvent}>{evnetBtn}</button> Add an event to the post</div>
                    <textarea className='petition-event' id={eventStyle} placeholder='Wrtie Something...' onChange={(e) => setEventContent(e.target.value)} />
                </div>
                <div id='post-btn-container'>
                    <button id='post-btn' onClick={handlePost}>POST</button>
                </div>
            </div>
        </div>
    )
}
export default PostPage