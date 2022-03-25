import React from 'react'
import {
    sendMessageAC as sendMessage,
    updateNewMessageBodyAC as updateNewMessageBody
} from "../../redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToStateObj = {
    updateNewMessageBody, sendMessage
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToStateObj)(Messages);

export default MessagesContainer