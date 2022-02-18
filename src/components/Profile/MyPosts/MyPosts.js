import React from 'react';
import s from './MyPosts.module.css'
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';


const MyPosts = (props) => {
    let PostsDataC = props.profilePage.PostsData.map(
        post => <Post id={post.id} userid={post.userid} likes={post.likes} message={post.msg} />
    )
    return (
        <div className={s.myPosts}>
            <h2>
                My posts
            </h2>
            <NewPost addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.profilePage.newPostText}/>
            <div className={s.posts}>
                {PostsDataC}
            </div>
        </div>
    )
}

export default MyPosts