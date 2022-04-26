import React, {Suspense} from 'react'
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom"
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
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert('some problem occurred')
    }
    componentDidMount() {
        this.props.initializeAppTC()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
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
                        <Switch>
                            {/*redirect from / to /profile/ */}
                            <Route path='/messages/'
                                   render={withSuspense(MessagesContainer)}/>
                            <Route path='/profile/:userId?'
                                   render={withSuspense(ProfileContainer)}/>
                            <Route path='/users/'
                                   render={() => <UsersContainer/>}/>
                            <Route path='/login/'
                                   render={() => <LoginPage/>}/>
                            <Route path='*'
                                   render={() => <div>404 NOT FOUND</div>}/>
                        </Switch>
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

const MainApp = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default MainApp