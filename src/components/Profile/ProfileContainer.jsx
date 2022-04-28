import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";

import {
    getStatusTC, getUserProfileTC,
    savePhotoTC, updateStatusTC
} from "../../redux/profile-reducer";

import Profile from "./Profile";


const ProfileContainer = (props) => { // сократить до двух рендеров
    const params = useParams()
    const navigate = useNavigate()

    const refreshProfile = () => {
        let userId = !!params.userId ? params.userId : props.authorizedUserId

        if (!!userId) {
            props.getUserProfileTC(userId)
            props.getStatusTC(userId)
        } else {
            navigate('../login')
        }
    }


    // componentDidMount
    useEffect(() => {
        refreshProfile()
    }, [])


    // componentDidUpdate
    useEffect(() => {
        refreshProfile()
    }, [params.userId, props.isAuth])


    return (
        <Profile isOwner={!params.userId}
                 profile={props.profile}
                 status={props.status}
                 savePhotoTC={props.savePhotoTC}
                 updateStatusTC={props.updateStatusTC}/>
    )
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

let mapDispatchToState = {
    getUserProfileTC, getStatusTC,
    updateStatusTC, savePhotoTC
}

export default connect(mapStateToProps, mapDispatchToState)(ProfileContainer)

