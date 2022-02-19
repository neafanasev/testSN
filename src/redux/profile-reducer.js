const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    PostsData: [
        {userid: 1, id: 1, likes: 15, msg:'asdasdasd'},
        {userid: 1, id: 2, likes: 20, msg:'dsddddd'},
        {userid: 1, id: 3, likes: 30, msg:'mmmmmm'}
    ],
    newPostText: 'hej'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {userid: 1, id: 5, likes: 0, msg: state.newPostText}
            state.PostsData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export let addPostActionCreator = () => ({type: ADD_POST})

export let updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})


export default profileReducer