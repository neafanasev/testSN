import React, {useEffect} from 'react'
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom"
import {connect, Provider} from "react-redux"
import store from "./redux/redux-store"

import './App.scss'
import {initializeAppTC} from "./redux/app-reducer"
import {withSuspense} from "./components/hoc/withSuspense";

import Preloader from "./components/common/Preloader/Preloader"
import Nav from "./components/Nav/Nav";
import HeaderContainer from "./components/Header/HeaderContainer"
const MessagesContainer = React.lazy(() => import("./components/Messages/MessagesContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const LoginPage = React.lazy(() => import("./components/Login/Login"))


const App = (props) => {
    useEffect(() => {
        props.initializeAppTC()
    }, [])

    if (!props.initialized) {
        return <Preloader/>
    }

    return (
        <div>
            <HeaderContainer/>
            <main>
                <Nav/>
                <Routes>
                    <Route path='/messages/'
                           element={withSuspense(MessagesContainer)({})}/>

                    <Route path={'profile'} element={withSuspense(ProfileContainer)({})}>
                        <Route path={':userId'} element={withSuspense(ProfileContainer)({})}/>
                    </Route>

                    <Route path='/users/'
                           element={withSuspense(UsersContainer)({})}/>
                    <Route path='/login/'
                           element={withSuspense(LoginPage)({})}/>
                    <Route path='*'
                           element={<div>404 NOT FOUND</div>}/>
                </Routes>
            </main>
        </div>
    )

}

const AppContainer = connect(
    (state) => ({initialized: state.app.initialized}),
    {initializeAppTC})(App)

const MainApp = () => (
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
)

export default MainApp