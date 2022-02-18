import React from 'react';

const NewPost = (props) => {
    let addPost = () => {
        let text = props.newPostText;
        props.addPost(text)
    }

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }
    return (
        <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}>

            </textarea>
            <button onClick={addPost}>
                Add Post
            </button>
        </div>
    )
}

export default NewPost