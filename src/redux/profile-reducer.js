import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

let initialState = {
    PostsData: [
        {userid: 1, id: 1, likes: 15, msg: 'asdasdasd'},
        {userid: 1, id: 2, likes: 20, msg: 'dsddddd'},
        {userid: 1, id: 3, likes: 30, msg: 'mmmmmm'}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {userid: 1, id: 5, likes: 0, msg: action.newPostText}
            return {
                ...state,
                PostsData: [...state.PostsData, newPost]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile})
const setStatusAC = (status) => ({type: SET_STATUS, status})
export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText})


export const getUserProfileTC = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)

    dispatch(setUserProfileAC(response.data))
}

export const getStatusTC = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)

    dispatch(setStatusAC(response.data))
}

export const updateStatusTC = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}

export default profileReducer