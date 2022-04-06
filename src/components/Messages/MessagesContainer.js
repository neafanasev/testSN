import React from 'react'
import {
    sendMessageAC as sendMessage,
} from "../../redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToStateObj = {
    sendMessage
}

const MessagesContainerC = compose(
    connect(mapStateToProps, mapDispatchToStateObj),
    withAuthRedirect
)(Messages)

export default MessagesContainerC