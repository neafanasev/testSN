import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = '/auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        default:
            return state
    }
}


const setAuthUserDataAC = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
const getCaptchaUrlSuccessAC = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl})


export const getAuthUserDataTC = () => async (dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserDataAC(id, email, login, true))
    }

}

export const loginTC = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    console.log(response)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrlTC())
        }

        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logoutTC = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(dispatch(setAuthUserDataAC(null, null, null, false)))
    }
}

export const getCaptchaUrlTC = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    console.log(response)

    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccessAC(captchaUrl))
}

export default authReducer