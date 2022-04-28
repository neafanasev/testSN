import React from "react";
import s from './FormsControls.module.scss'
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            {children}
            {hasError && <span>{error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, type='text', text = null) => {
    return (
        <div>
            <Field component={component}
                   name={name}
                   validate={validators}
                   type={type}
                   placeholder={placeholder}/> {text}
        </div>
    )
}
