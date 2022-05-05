import React from 'react';
import s from './Post.module.scss'


const Post = (props) => (
    <div className={s.item}>
        <img alt="" src="https://img.scoop.it/cKAEfvNSTJwCa79cmbVddoXXXL4j3HpexhjNOf_P3YmryPKwJ94QGRtDb3Sbc6KY"/>
        <p>
            {props.message}
        </p>
        {/*<p>Likes: {props.likes}</p>*/}
    </div>
)

export default Post