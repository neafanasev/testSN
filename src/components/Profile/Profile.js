import React from 'react';
import s from './Profile.module.css'
import ProfileHeader from './ProfileHeader/ProfileHeader';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.contentWrapper}>
            <ProfileHeader profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile