import s from "./Users.module.scss"
import userPhoto from "../../assets/images/user.png"
import React from "react"
import {NavLink} from "react-router-dom"

const User = ({user, key, isFollowingInProgress, unfollowTC, followTC}) => {
    return (
        <div key={key}>

                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img alt='' src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={isFollowingInProgress.some(id => id === user.id)}
                                      onClick={() => unfollowTC(user.id)}>Unfollow</button>

                            : <button disabled={isFollowingInProgress.some(id => id === user.id)}
                                      onClick={() => followTC(user.id)}>Follow</button>
                        }
                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.city"}</div>
                        <div>{"user.location.country"}</div>
                    </span>
                </span>
        </div>
    )
}

export default User
