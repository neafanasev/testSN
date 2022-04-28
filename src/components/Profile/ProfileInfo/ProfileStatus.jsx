import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.scss';

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusTC(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.profileStatus}>
            {!editMode ?
                <div>
                    <h2>Status</h2><p onDoubleClick={activateEditMode}>{props.status || '-----'}</p>
                </div>
                :
                <div>
                    <input onBlur={deactivateEditMode}
                           onChange={onStatusChange}
                           autoFocus={true}
                           value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatus;