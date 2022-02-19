import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {
    let addPost = () => {
        let action = addPostActionCreator()
        props.store.dispatch(action)
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    let newPostText = props.store.getState().profilePage.newPostText

    return (
        <NewPost
            updateNewPostText={onPostChange}
            addPost={addPost}
            newPostText={newPostText}
        />
    )
}

export default NewPostContainer