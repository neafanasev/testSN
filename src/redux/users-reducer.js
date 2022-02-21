const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'


let initialState = {
    users: [

    ]
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
            console.log(state.users[0].id)
            console.log(action.userid)
            console.log(action)
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
                users: [...state.users, ...action.users]
            }
        }

        default:
            return state
    }
}

export let followAC = (userid) => ({type: FOLLOW, userid: userid})

export let unfollowAC = (userid) => ({type: UNFOLLOW, userid: userid})

export let setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer