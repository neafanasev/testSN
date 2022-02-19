import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "./../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        PostsData: state.profilePage.PostsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer