import React from 'react';
import s from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={s.contentWrapper}>
            <ProfileInfo profile={props.profile}
                         isOwner={props.isOwner}
                         status={props.status}
                         savePhotoTC={props.savePhotoTC}
                         updateStatusTC={props.updateStatusTC}/>
            {props.isOwner && <MyPostsContainer/>}
        </div>
    )
}

export default Profile