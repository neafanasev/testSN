import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)
    let pages = []
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {props.onPageChanged(p)}}>{p}</span>})
            }
        </div>
        {
            props.users.map(u =>
                <div key={u.id}>

                        <span>
                            <div>
                                <img alt='' src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => {props.unfollow(u.id)} }>unfollow</button>
                                    : <button onClick={() => {props.follow(u.id)} }>follow</button>
                                }
                            </div>
                        </span>
                    <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.city"}</div>
                                <div>{"u.location.country"}</div>
                            </span>
                        </span>
                </div>
            )
        }
    </div>
}

export default Users