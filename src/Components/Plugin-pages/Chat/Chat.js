import React from 'react';
import './Chat.css';
import MessageIcon from './MessageIcon.png';


export default function Chat(){
    function Message(){
        var chat = document.getElementById("chatBox")
        if(chat.style.display === "block"){
            chat.style.display = "none";
        }
        else{
            chat.style.display = "block";
        }
    }
    return (
        <div className="Chat-Container">
            <div className="Message" id="chatBox">
                Hey Hi, How can<br />i help you
            </div>
            <div className="chatIcon" onClick={() => Message()}> <img src={MessageIcon} alt="MessageIcon" className="MessageIcon" /></div>
        </div>
    );
}


{/* <i class="far fa-comment-alt" /> */}