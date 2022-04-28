import React from 'react'
import s from './Messages.module.scss'
import {NavLink} from "react-router-dom";
import AddMessageForm from "./AddMessagesForm";

const DialogItem = (props) => (
    <div className={s.item}>
        <NavLink to={'/dialogs/' + props.id}>
            {props.name}
        </NavLink>
    </div>
)


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
        props.sendMessageAC(values.newMessageBody)
    }

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