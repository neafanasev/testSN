import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import NewPostContainer from "./NewPost/NewPostContainer";

const MyPosts = (props) => {
    let PostsDataC = props.store.getState().profilePage.PostsData.map(
        post => <Post id={post.id} userid={post.userid} likes={post.likes} message={post.msg} />
    )

    return (
        <div className={s.myPosts}>
            <h2>
                My posts
            </h2>
            <NewPostContainer store={props.store}/>
            <div className={s.posts}>
                {PostsDataC}
            </div>
        </div>
    )
}

export default MyPosts