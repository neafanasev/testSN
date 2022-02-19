import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
})

let store = createStore(reducers)

window.store = store
window.state = store.getState()

export default store