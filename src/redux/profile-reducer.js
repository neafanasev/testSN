import {usersAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    PostsData: [
        {userid: 1, id: 1, likes: 15, msg:'asdasdasd'},
        {userid: 1, id: 2, likes: 20, msg:'dsddddd'},
        {userid: 1, id: 3, likes: 30, msg:'mmmmmm'}
    ],
    newPostText: 'hej',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {userid: 1, id: 5, likes: 0, msg: state.newPostText}
            return {
                ...state,
                PostsData: [...state.PostsData, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST})
const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const getUserProfileTC = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
}

export default profileReducer