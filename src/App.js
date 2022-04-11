import React from 'react'
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";

import Nav from "./components/Nav/Nav";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {initializeAppTC} from "./redux/app-reducer";

import './App.css';
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div>
                    <HeaderContainer/>
                    <main>
                        <Nav/>
                        <Route path='/messages/'
                               render={() => <MessagesContainer/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/users/'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login/'
                               render={() => <LoginPage/>}/>

                    </main>
                </div>
            )
        }
    }

}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const mapDispatchToPropsObj = {
    initializeAppTC
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToPropsObj)
)(App)
