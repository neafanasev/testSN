import React from "react";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";

const Users = (props) => {
    return <div>
        <Paginator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   pageSize={props.pageSize}
                   totalUsersCount={props.totalUsersCount}
        />
        {
            props.users.map(u => (<User key={u.id}
                                        user={u}
                                        isFollowingInProgress={props.isFollowingInProgress}
                                        unfollow={props.unfollow}
                                        follow={props.follow}/>))
        }
    </div>
}

export default Users
