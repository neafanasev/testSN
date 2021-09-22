import React, {Component} from 'react';
import s from './MyPosts.module.css'
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <h2>
                My posts
            </h2>
            <NewPost/>
            <div className={s.posts}>
                <Post likes='15' message='asdsada'/>
                <Post likes='20' message='dsdddd'/>
                <Post likes='30' message='mmmmmm'/>
            </div>
        </div>
    )
}

export default MyPosts