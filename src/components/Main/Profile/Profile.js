import React, {Component} from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileHeader from './ProfileHeader/ProfileHeader';

const Profile = () => {
    return (
        <div className={s.contentWrapper}>
            <ProfileHeader/>
            <MyPosts/>
        </div>
    )
}

export default Profile