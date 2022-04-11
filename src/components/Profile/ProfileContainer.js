import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    getStatusTC as getStatus,
    getUserProfileTC as getUserProfile,
    updateStatusTC as updateStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
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

    render() {

        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
        />
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
    updateStatus
}

const ProfileContainerC = compose(
    connect(mapStateToProps, mapDispatchToStateObj),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

export default ProfileContainerC

