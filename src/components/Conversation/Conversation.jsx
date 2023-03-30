import React, { useEffect, useState } from "react";

import { getUser } from "../../Api/UserRequest";
import defaultMale from "../../img/defaultMaleProfileImage.jpg";
const Conversation = ({ data, currentUserId, online }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUserId);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);
  return (
    <>
      <div className="conversation">
        {online && <div className="online-dot"></div>}
        <img
          src={userData?.profilePicture ? userData.profilePicture : defaultMale}
          alt=""
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            marginRight: "20px",
          }}
        />
        <div className="name" style={{ fontSize: "0.8rem" }}>
          <span>{userData?.firstName}</span>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;
