import React from 'react';
import PostSide from '../../components/PostSide/PostSide';
import ProfileSide from '../../components/ProfileSide/ProfileSide';

const home = () => {
    return (
        <div className="home">
            <ProfileSide/>
            <PostSide/>
            <div className="rightSide">Right</div>
       </div>
    );
};

export default home;