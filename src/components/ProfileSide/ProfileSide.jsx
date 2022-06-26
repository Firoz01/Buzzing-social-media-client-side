import React from 'react';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';
import './ProfileSide.css'

const ProfileSide = () => {
    return (
        <div>
            <div className="ProfileSide">
                <LogoSearch />
                <ProfileCard/>
            </div>
        </div>
    );
};

export default ProfileSide;