import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let PostsDataC = props.PostsData.map(
        post => <Post id={post.id} userid={post.userid} likes={post.likes} message={post.msg} />
    )
    let newPostElement = React.createRef();
    return (
            <div className={s.myPosts}>
                <h2>
                    My posts
                </h2>
                <div>
                    <textarea ref={newPostElement}
                              onChange={() => props.updateNewPostText(newPostElement.current.value)}
                              value={props.newPostText}
                              placeholder='What`s new?'
                    >

                    </textarea>
                    <button onClick={props.addPost}>
                        Add Post
                    </button>
                </div>
                <div className={s.posts}>
                    {PostsDataC}
                </div>
            </div>

    )
}

export default MyPosts