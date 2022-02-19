import React from 'react';
import s from './Profile.module.css'
import ProfileHeader from './ProfileHeader/ProfileHeader';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={s.contentWrapper}>
            <ProfileHeader/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile