import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import {connect} from "react-redux"

import {sendMessageAC} from "../../redux/messages-reducer";

import Messages from "./Messages";

const MessagesContainer = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!props.isAuth) navigate('../login')
    }, [props.isAuth])

    return (
        <Messages {...props}/>
    )

}


const mapStateToProps = (state) => ({
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {sendMessageAC})(MessagesContainer)