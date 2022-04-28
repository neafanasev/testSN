import {getAuthUserDataTC} from "./auth-reducer"

const INITIALIZED_SUCCESSFULLY = '/app/INITIALIZED_SUCCESSFULLY'

let initialState = {
    initialized: false

}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESSFULLY: {
            return {
                initialized: true
            }
        }
        default:
            return state
    }
}


export const initializedSuccessfullyAC = () => ({type: INITIALIZED_SUCCESSFULLY})

export const initializeAppTC = () => (dispatch) => {
    let promise = dispatch(getAuthUserDataTC())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccessfullyAC())
        })

}

export default appReducer