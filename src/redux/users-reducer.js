import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
    isFollowingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                isFollowingInProgress: action.isFollowingInProgress
                    ? [...state.isFollowingInProgress, action.userid]
                    : [...state.isFollowingInProgress.filter(id => id !== action.userid)]
            }
        }
        default:
            return state
    }
}


export const followSuccessAC = (userid) => ({type: FOLLOW, userid})
export const unfollowSuccessAC = (userid) => ({type: UNFOLLOW, userid})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingInProgressAC = (isFollowingInProgress, userid) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFollowingInProgress, userid})

export const requestUsersTC = (currentPage, pageSize) =>
        (dispatch) => {
            dispatch(toggleIsFetchingAC(true))
            usersAPI.getUsers(currentPage, pageSize)
                .then(data => {
                    dispatch(toggleIsFetchingAC(false))
                    dispatch(setUsersAC(data.items))
                    dispatch(setTotalUsersCountAC(data.totalCount))
                })
        }

export const followTC = (userId) =>
        (dispatch) => {
            dispatch(toggleIsFollowingInProgressAC(true, userId))
            usersAPI.follow(userId)
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(followSuccessAC(userId))
                    }
                    dispatch(toggleIsFollowingInProgressAC(false, userId))
                })
        }

export const unfollowTC = (userId) =>
        (dispatch) => {
            dispatch(toggleIsFollowingInProgressAC(true, userId))
            usersAPI.unfollow(userId)
                .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(unfollowSuccessAC(userId))
                    }
                    dispatch(toggleIsFollowingInProgressAC(false, userId))
                })
        }

export default usersReducer