import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    getStatusTC as getStatus,
    getUserProfileTC as getUserProfile,
    updateStatusTC as updateStatus,
    savePhotoTC as savePhoto
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId != this.props.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        savePhoto={this.props.savePhoto}
                        updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

let mapDispatchToStateObj = {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto
}

const ProfileContainerC = compose(
    connect(mapStateToProps, mapDispatchToStateObj),
    withRouter,
)(ProfileContainer)

export default ProfileContainerC

