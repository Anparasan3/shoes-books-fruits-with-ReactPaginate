import React, { useEffect } from 'react';
import './Chat.css';
import MessageIcon from './MessageIcon.png';
import styled from 'styled-components';

const ChatMessage = styled.div`
    .chatroom h3 { background-color: ${props => props.color} }
    .chatroom .chats .chat-buttons .chat-button { background-color: ${props => props.color}; }
    .chatroom .input { background-color: ${props => props.color}; }
    .chatroom .input input[type=submit] { background-color: ${props => props.color}; }
    .chat-container {
        margin: auto;
        width: auto;
    }
`;

export default function Chat(props){
    const {state} = props;
    function Message(){
        var chatCont = document.getElementById("chatContent");
        if (chatCont.style.display === "block") {
            chatCont.style.display = "none";
        } else {
            chatCont.style.display = "block";
        }
    }

    // for chatbot
    useEffect(() => {
        window.chatroom = new window.Chatroom({
            host: "https://openturf.dev/retaildemo",
            title: "Retail Demo",
            container: document.querySelector(".chat-container"),
            welcomeMessage: "Hello! How can I help you?"
        });
        window.chatroom.openChat();
    });

    return (
        <ChatMessage color = {state}>
            <div className="chatcontainer" id="chatContent">
                <div className="chat-container"></div>
            </div>
            <div className="chatIcon" onClick={() => Message()}> 
                <img src={MessageIcon} alt="MessageIcon" className="MessageIcon" />
            </div>
        </ChatMessage>
    );
}


/* <i class="far fa-comment-alt" /> */
