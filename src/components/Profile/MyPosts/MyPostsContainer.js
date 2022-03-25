import React from 'react';
import {
    addPostAC as addPost,
    updateNewPostTextAC as updateNewPostText
} from "./../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        PostsData: state.profilePage.PostsData
    }
}


let mapDispatchToStateObj = {
    updateNewPostText, addPost
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToStateObj)(MyPosts)

export default MyPostsContainer