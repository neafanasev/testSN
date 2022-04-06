import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validator";

let maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={'newMessageBody'}
                   validate={[required, maxLength50]}
                   placeholder={'Enter your message'}/>
            <button>Send</button>
        </form>
    )
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)
