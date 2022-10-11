import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import { userChats } from "../../Api/ChatRequest";
import Conversation from "../../components/Conversation/Conversation";
import Navbar from "../../components/Navbar/Navbar";
import ChatBox from "../../components/ChatBox/ChatBox";
import { io } from "socket.io-client";

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const socket = useRef();

  const socketApi = "https://buzzing-socket-server.herokuapp.com";
  //const socketApi = "http://localhost:8800";

  useEffect(() => {
    socket.current = io(socketApi);
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  //send message to the socket server

  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  //receive message from socket server

  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setReceiveMessage(data);
    });
  }, []);

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

  const checkOnilineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  return (
    <div className="Chat">
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div onClick={() => setCurrentChat(chat)}>
                <Conversation
                  data={chat}
                  currentUserId={user._id}
                  online={checkOnilineStatus(chat)}
                ></Conversation>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <Navbar />
        </div>
        {/*chat body */}
        <ChatBox
          chat={currentChat}
          setSendMessage={setSendMessage}
          receiveMessage={receiveMessage}
          onlineUsers={onlineUsers}
          currentUser={user._id}
        />
      </div>
    </div>
  );
};

export default Chat;
