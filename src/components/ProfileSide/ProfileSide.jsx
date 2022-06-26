import React from 'react';
import FollowersCard from '../FollowersCard/FollowersCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';
import './ProfileSide.css'

const ProfileSide = () => {
    return (
        <div>
            <div className="ProfileSide">
                <LogoSearch />
                <ProfileCard />
                <FollowersCard/>
            </div>
        </div>
    );
};

export default ProfileSide;