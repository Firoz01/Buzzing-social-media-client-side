import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../Action/uploadAction";
import { checkChatsAvailabe, createChats } from "../../Api/ChatRequest";
import defaultProfilePicture from "../../img/defaultFemaleProfileImage.jpg";

const User = ({ person }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [createChat, setCreateChat] = useState(false);
  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const dispatch = useDispatch();

  // console.log("userId:", user._id);
  // console.log("personId", person._id);

  useEffect(() => {
    console.log("create", createChat);
    const createChatHandle = async () => {
      if (createChat === true) {
        let available;
        try {
          console.log(user._id, person._id);
          available = await checkChatsAvailabe(user._id, person._id);
          console.log("avaiable", available);
        } catch (error) {
          console.log(error);
        }
        if (available.data === null) {
          try {
            const data = {
              senderId: user._id,
              receiverId: person._id,
            };
            const result = createChats(data);
            console.log("chat created result: ", result);
            setCreateChat(false);
          } catch (error) {
            console.log(error);
          }
        }
      }
    };
    createChatHandle();
  }, [createChat]);

  const handleFollow = async () => {
    if (!following) setCreateChat(true);
    following
      ? dispatch(unfollowUser(person._id, user))
      : dispatch(followUser(person._id, user));

    setFollowing((prev) => !prev);
  };
  return (
    <div className="follower">
      <div>
        {person.profilePicture ? (
          <img src={person.profilePicture} alt="" className="followerImage" />
        ) : (
          <img src={defaultProfilePicture} alt="" className="followerImage" />
        )}
        <div className="name">
          <span>{person.firstName}</span>
          <span>{person.userName}</span>
        </div>
      </div>
      <button
        className={following ? "button fc UnfollowButton" : "button fc"}
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
