import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";

import Profile from "./Profile";
import {setUserProfileAC as setUserProfile} from "../../redux/profile-reducer";
// import {useMatch} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let mapDispatchToStateObj = {
    setUserProfile
}

// let WithUrlDataContainerComponent = useMatch(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToStateObj)(ProfileContainer)

