import React from 'react'
import s from './Messages.module.css'
import {NavLink, Redirect} from "react-router-dom";

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
    let newMessageBody = state.newMessageBody

    let dialogItemsDataC = state.dialogItemsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesDataC = state.messagesData.map(messages => <MessageItem text={messages.text} />)

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItemsBox}>
                {dialogItemsDataC}
            </div>
            <div className={s.dialogMessagesBox}>
                <div>{messagesDataC}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder='Enter your message'
                        >

                        </textarea>
                    </div>
                    <div><button onClick={onSendMessageClick}>asdasd</button></div>
                </div>

            </div>
        </div>
    )
}

export default Messages