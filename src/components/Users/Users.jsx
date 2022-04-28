import React from "react"
import User from "./User"
import Paginator from "../common/Paginator/Paginator"

const Users = (props) => {
    return <div>

        <Paginator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   pageSize={props.pageSize}
                   totalItemsCount={props.totalUsersCount}
        />
        {
            props.users.map(u => (<User key={u.id}
                                        user={u}
                                        isFollowingInProgress={props.isFollowingInProgress}
                                        unfollowTC={props.unfollowTC}
                                        followTC={props.followTC}/>))
        }
    </div>
}

export default Users
