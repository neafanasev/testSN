import React from 'react'
import {Field, reduxForm} from "redux-form"

import {maxLengthCreator, required} from "../../../utils/validators/validator"
import {Textarea} from "../../common/FormsControls/FormsControl"

import s from './MyPosts.module.css'
import Post from './Post/Post';

let maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={'newPostText'}
                   validate={[required, maxLength10]}
                   placeholder='What`s new?'/>
            <button>Add post</button>
        </form>
    )
}

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

const MyPosts = React.memo((props) =>  {
    let PostsDataC = props.PostsData.map(
        post => <Post id={post.id} userid={post.userid} likes={post.likes} message={post.msg}/>
    )

    const onAddPost = (values) => {
        props.addPostAC(values.newPostText)
    }

    return (
        <div className={s.myPosts}>
            <h2>My posts</h2>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {PostsDataC}
            </div>
        </div>
    )
})


export default MyPosts