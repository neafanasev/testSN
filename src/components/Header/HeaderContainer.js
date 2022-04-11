import React from 'react';
import Header from "./Header";
import {logoutTC as logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const mapDispatchToPropsObj = {
    logout
}

export default connect(mapStateToProps, mapDispatchToPropsObj)(HeaderContainer)