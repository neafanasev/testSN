import React, {Suspense} from 'react'
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import {connect, Provider} from "react-redux"
import {compose} from "redux"

import Nav from "./components/Nav/Nav";
import UsersContainer from "./components/Users/UsersContainer"
import HeaderContainer from "./components/Header/HeaderContainer"
import LoginPage from "./components/Login/Login"

import Preloader from "./components/common/Preloader/Preloader"
import './App.css'
import store from "./redux/redux-store"
import {initializeAppTC} from "./redux/app-reducer"
import {withSuspense} from "./components/hoc/withSuspense";

const MessagesContainer = React.lazy(() => import("./components/Messages/MessagesContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else { //make lazy loading for everything, make hoc
            return (
                <div>
                    <HeaderContainer/>
                    <main>
                        <Nav/>
                        <Route path='/messages/'
                               render={withSuspense(MessagesContainer)} />
                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)} />
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

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToPropsObj)
)(App)

const MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp