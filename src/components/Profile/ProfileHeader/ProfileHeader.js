import React from 'react';
import s from './ProfileHeader.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileHeader = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileHeader}>
            <div className={s.picture}>
                <img alt="" src={props.profile.photos.large}/>
            </div>
            <div className={s.info}>
                <div className={s.name}>
                    <h1>
                        {props.profile.fullName}
                    </h1>
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileHeader;