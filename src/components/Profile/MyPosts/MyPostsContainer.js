import React from 'react';
import {
    addPostAC as addPost,
} from "./../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        PostsData: state.profilePage.PostsData
    }
}

const mapDispatchToStateObj = {
    addPost
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToStateObj)(MyPosts)

export default MyPostsContainer