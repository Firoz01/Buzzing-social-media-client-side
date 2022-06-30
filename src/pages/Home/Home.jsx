import React from 'react';
import PostSide from '../../components/PostSide/PostSide';
import ProfileSide from '../../components/ProfileSide/ProfileSide';
import RightSide from '../../components/RightSide/RightSide';

const home = () => {
    return (
        <div className="home">
            <ProfileSide/>
            <PostSide/>
            <RightSide/>
       </div>
    );
};

export default home;