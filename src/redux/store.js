import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


let store = {
    _state: {
        profilePage: {
            PostsData: [
                {userid: 1, id: 1, likes: 15, msg:'asdasdasd'},
                {userid: 1, id: 2, likes: 20, msg:'dsddddd'},
                {userid: 1, id: 3, likes: 30, msg:'mmmmmm'}
            ],
            newPostText: 'hej'
        },
        messagesPage: {
            dialogItemsData: [
                {id: '1', name: 'Коля'},
                {id: '2', name: 'Вася'},
                {id: '3', name: 'Паша'},
                {id: '4', name: 'Никита'},
                {id: '5', name: 'Саша'},
                {id: '6', name: 'Маша'},
                {id: '7', name: 'Дима'}
            ],
            messagesData: [
                {id:1, text:'hi'},
                {id:2, text:'how are you?'},
                {id:3, text:'stop being so fucking pretty'},
                {id:4, text:'bb'}
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber () {
        console.log('State changed')
    },
    getState(){
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state)

    }

}

// export default store;

window.store = store