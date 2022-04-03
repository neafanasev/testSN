import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfileTC as getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
// import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let mapDispatchToStateObj = {
    getUserProfile
}


const ProfileContainerC = compose(
    connect(mapStateToProps, mapDispatchToStateObj),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

export default ProfileContainerC

