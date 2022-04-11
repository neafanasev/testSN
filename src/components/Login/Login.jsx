import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControl";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {loginTC as login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Input}
                   name={'email'}
                   validate={[required]}
                   placeholder={'Email'}/>
            <Field component={Input}
                   name={'password'}
                   validate={[required]}
                   type={'password'}
                   placeholder={'Password'}/>
            <Field component={Input}
                   name={'rememberMe'}
                   type={'checkbox'}/>
            <button>Login</button>
            {props.error && <div className={s.formSummaryError}>Wrong email or password</div>}

        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const mapDispatchToStateObj = {
    login
}


export default connect(mapStateToProps, mapDispatchToStateObj)(Login)