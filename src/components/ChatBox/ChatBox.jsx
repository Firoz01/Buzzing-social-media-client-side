import React, { useEffect, useState } from "react";
import { getMessages } from "../../Api/MessageRequest";
import { getUser } from "../../Api/UserRequest";
import defaultMale from "../../img/defaultMaleProfileImage.jpg";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
import "./ChatBox.css";
const ChatBox = ({ chat, currentUser }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  //fetching data
  useEffect(() => {
    const userId = chat?.members.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  //fetching data for messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat?._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) fetchMessages();
  }, [chat]);

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };
  return (
    <>
      <div className="ChatBox-container">
        {chat ? (<>
        <div className="chat-header">
          <div className="conversation">
            <img
              src={
                userData?.profilePicture ? userData.profilePicture : defaultMale
              }
              alt=""
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                marginRight: "20px",
              }}
            />
            <div className="name" style={{ fontSize: "0.8rem" }}>
              <span>{userData?.firstName} Hasan</span>
            </div>
          </div>
          <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
        </div>
        {/* chatbox messages */}
        <div className="chat-body">
          {messages.map((message) => (
            <>
              <div
                className={
                  message.senderId === currentUser ? "message own" : "message"
                }
              >
                <span>{message.text}</span>
                <span>{format(message.createdAt)}</span>
              </div>
            </>
          ))}
        </div>
        {/* chat - sender*/}
        <div className="chat-sender">
          <div>+</div>
          <InputEmoji value={newMessage} onchange={handleChange} />
          <div className="send-button button">Send</div>
        </div></>) : <span className="chatbox-empty-message"> Tap on a Chat to start conversation...</span> }
      </div>
    </>
  );
};

export default ChatBox;
