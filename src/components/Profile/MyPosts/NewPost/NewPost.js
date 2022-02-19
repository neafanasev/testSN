import React from 'react';


const NewPost = (props) => {

    let newPostElement = React.createRef();

    return (
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
    )
}

export default NewPost