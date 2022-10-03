import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../Action/uploadAction";
import defaultProfilePicture from "../../img/defaultFemaleProfileImage.jpg";

const User = ({ person }) => {
  const { user } = useSelector((state) => state.authReducer.authData);

  const [following, setFollowing] = useState(
    person.followers.includes(user._id)
  );
  const dispatch = useDispatch();
  const handleFollow = () => {
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
