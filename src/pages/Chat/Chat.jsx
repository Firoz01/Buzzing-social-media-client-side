import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import { userChats } from "../../Api/ChatRequest";

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
  console.log(chats);
  return (
    <div className="Chat">
      <div className="Left-side-chat">
        <LogoSearch />
        <h2>Chats</h2>
        <div className="Chat-list">Conversations</div>
      </div>
      <div className="Right-side-chat"></div>
    </div>
  );
};

export default Chat;
