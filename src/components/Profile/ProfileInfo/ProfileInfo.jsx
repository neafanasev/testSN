import React from 'react'
import s from './ProfileInfo.module.scss'
import Preloader from "../../common/Preloader/Preloader"
import ProfileStatus from "./ProfileStatus"
import userPhoto from "../../../assets/images/user.png"

const ProfileInfo = ({profile, status, updateStatusTC, isOwner, savePhotoTC}) => {
    if (!profile) {
        return <Preloader/>
    }

    // const onMainPhotoSelected = (e) => {
    //     if (e.target.files.length) {
    //         savePhotoTC(e.target.files[0])
    //     }
    // }
    //make choose type only img
    //make savephoto live update by using hooks, make fnc for setting photo


    return (
        <div className={s.profileHeader}>
            <div className={s.picture}>
                <img alt="" src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {/*{isOwner && <div><input type={'file'} onChange={onMainPhotoSelected}/></div>}*/}
            </div>
            <div className={s.info}>
                <ProfileData profile={profile}/>
                <ProfileStatus status={status} updateStatusTC={updateStatusTC} />
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
            {/*<div>*/}
            {/*    Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}*/}
            {/*</div>*/}
            {/*{profile.lookingForAJob &&*/}
            {/*    <div>*/}
            {/*        {profile.lookingForAJobDescription}*/}
            {/*    </div>*/}
            {/*}*/}
            {/*<div>*/}
            {/*    About me: {profile.aboutMe}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    Contacts: {Object.keys(profile.contacts).map(key => (*/}
            {/*    <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
            {/*))}*/}
            {/*</div>*/}
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


export default ProfileInfo;