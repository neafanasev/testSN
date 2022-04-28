import React from 'react'
import {connect} from "react-redux"
import {addPostAC} from "./../../../redux/profile-reducer"
import MyPosts from "./MyPosts"

const mapStateToProps = (state) => ({
    newPostText: state.profilePage.newPostText,
    PostsData: state.profilePage.PostsData
})

export default connect(mapStateToProps, {addPostAC})(MyPosts)