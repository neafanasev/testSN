import React from 'react'
import s from './ProfileHeader.module.css'
import Preloader from "../../common/Preloader/Preloader"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
import userPhoto from "../../../assets/images/user.png"

const ProfileHeader = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        debugger
        if (e.target.files.length) {

            savePhoto(e.target.files[0])
        }
    }
    //make choose type only img
    //make savephoto live update by using hooks, make fnc for setting photo


    return (
        <div className={s.profileHeader}>
            <div className={s.picture}>
                <img alt="" src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <div><input type={'file'} onChange={onMainPhotoSelected}/></div>}
            </div>
            <div className={s.info}>
                <ProfileData profile={profile}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

const ProfileData = ({profile}) => {
    return (
        <div>
            <div className={s.name}>
                <h1>
                    {profile.fullName}
                </h1>
            </div>
            <div>
                Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
                <div>
                    {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                About me: {profile.aboutMe}
            </div>
            <div>
                Contacts: {Object.keys(profile.contacts).map(key => (
                <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            ))}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}


export default ProfileHeader;