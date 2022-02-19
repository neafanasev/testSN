import React from 'react'
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messages-reducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {
    let dialogsPage = props.store.getState().messagesPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Messages updateNewMessageBody={onNewMessageChange}
                     sendMessage={onSendMessageClick}
                     messagesPage={dialogsPage}
    />

}

export default MessagesContainer