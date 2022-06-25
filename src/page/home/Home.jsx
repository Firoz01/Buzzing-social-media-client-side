import React from 'react';
import ProfileSide from '../../components/ProfileSide/ProfileSide';

const home = () => {
    return (
        <div className="home">
            <ProfileSide></ProfileSide>
            <div className="postSide">Post</div>
            <div className="rightSide">Right</div>
       </div>
    );
};

export default home;