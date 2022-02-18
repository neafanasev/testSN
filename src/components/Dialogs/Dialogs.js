import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

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

const Dialogs = (props) => {
    let dialogItemsDataC = props.messagesPage.dialogItemsData.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id} />
    )
    let messagesDataC = props.messagesPage.messagesData.map(
        messages => <MessageItem text={messages.text} />
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItemsBox}>
                {dialogItemsDataC}
            </div>
            <div className={s.dialogMessagesBox}>
                {messagesDataC}
            </div>
        </div>
    )
}

export default Dialogs