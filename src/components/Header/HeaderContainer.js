import React from 'react';
import Header from "./Header";
import {getAuthUserDataTC as getAuthUserData, logoutTC as logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.getAuthUserData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const mapDispatchToPropsObj = {
    getAuthUserData, logout
}

export default connect(mapStateToProps, mapDispatchToPropsObj)(HeaderContainer)