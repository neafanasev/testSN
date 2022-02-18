import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = (props) => {
    return (
        <div className={s.contentWrapper}>
            <ProfileHeader/>
            <MyPosts profilePage={props.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile