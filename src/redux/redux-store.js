import {applyMiddleware, combineReducers, createStore, compose} from "redux"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'

import profileReducer from "./profile-reducer"
import messagesReducer from "./messages-reducer"
import usersReducer from "./users-reducer"
import appReducer from "./app-reducer"
import authReducer from "./auth-reducer"


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.__store__ = store

export default store