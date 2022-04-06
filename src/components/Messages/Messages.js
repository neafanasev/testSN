import React from 'react'
import s from './Messages.module.css'
import {NavLink, Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessagesForm";
import {maxLengthCreator} from "../../utils/validators/validator";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.item}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={s.messageItem}>
            <p>
                {props.text}
            </p>
        </div>
    )
}

const Messages = (props) => {
    let state = props.messagesPage

    let dialogItemsDataC = state.dialogItemsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesDataC = state.messagesData.map(messages => <MessageItem text={messages.text}/>)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItemsBox}>
                {dialogItemsDataC}
            </div>
            <div className={s.dialogMessagesBox}>
                <div>{messagesDataC}</div>
                <div>
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>

            </div>
        </div>
    )
}


export default Messages