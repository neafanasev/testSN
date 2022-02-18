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
            ]
        }
    },
    getState(){
        return this._state
    },
    _callSubscriber () {
        console.log('State changed')
    },
    addPost(){
        let newPost = {userid: 1, id: 5, likes: 0, msg: this._state.profilePage.newPostText}
        this._state.profilePage.PostsData.push(newPost)
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}


export default store;

window.store = store