import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import { userChats } from "../../Api/ChatRequest";
import Conversation from "../../components/Conversation/Conversation";

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const getChats = async (req, res) => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user]);

  return (
    <div className="Chat">
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div>
                <Conversation
                  data={chat}
                  currentUserId={user._id}
                ></Conversation>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Right-side-chat"></div>
    </div>
  );
};

export default Chat;
