import React from "react"
import {reduxForm} from "redux-form"
import {useNavigate} from "react-router-dom"
import {connect} from "react-redux"

import {createField, Input} from "../common/FormsControls/FormsControl"
import {required} from "../../utils/validators/validator"
import {loginTC} from "../../redux/auth-reducer"
import s from '../common/FormsControls/FormsControls.module.scss'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, 'password')}
            {/*{createField(null, 'rememberMe', [], Input, 'checkbox', 'remember me')}*/}
            {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
            {captchaUrl && createField('Enter captcha', 'captcha', [required], Input, '', '')}

            <button>Login</button>
            {error && <div className={s.formSummaryError}>{error}</div>}

        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    let navigate = useNavigate()
    const onSubmit = (formData) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        navigate('../profile')
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

const mapDispatchToStateObj = {
    loginTC
}


export default connect(mapStateToProps, mapDispatchToStateObj)(Login)