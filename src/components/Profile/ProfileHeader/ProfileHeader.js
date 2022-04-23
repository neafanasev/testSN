import React from 'react';
import s from './ProfileHeader.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileHeader = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileHeader}>
            <div className={s.picture}>
                <img alt="" src={profile.photos.large}/>
            </div>
            <div className={s.info}>
                <div className={s.name}>
                    <h1>
                        {profile.fullName}
                    </h1>
                </div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileHeader;