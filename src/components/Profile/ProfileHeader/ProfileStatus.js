import React from 'react';
import s from './ProfileHeader.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <div className={s.profileStatus}>
                {!this.state.editMode ?
                    <div>
                        <p onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</p>
                    </div>
                    :
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;