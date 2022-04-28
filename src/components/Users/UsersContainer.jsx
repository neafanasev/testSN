 import React, {useEffect} from 'react'
import {connect} from "react-redux"

import {
    followTC, unfollowTC,
    setCurrentPageAC, requestUsersTC,
    toggleIsFollowingInProgressAC
} from "../../redux/users-reducer"
import {
    getUsers, getCurrentPage,
    getIsFetching, getIsFollowingInProgress,
    getPageSize, getTotalUsersCount
} from "../../redux/users-selectors"

import Users from "./Users"
import Preloader from "../common/Preloader/Preloader"

const UsersContainer = (props) => {
    const {totalUsersCount, pageSize, users, currentPage, isFetching, followTC, unfollowTC, isFollowingInProgress} = props

    useEffect(() => {
        props.requestUsersTC(currentPage, pageSize)
    }, [])

    const onPageChanged = (pageNumber) => {
        const {pageSize} = props
        props.setCurrentPageAC(pageNumber)
        props.requestUsersTC(pageNumber, pageSize)
    }

    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   users={users}
                   currentPage={currentPage}
                   isFetching={isFetching}
                   onPageChanged={onPageChanged}
                   followTC={followTC}
                   unfollowTC={unfollowTC}
                   isFollowingInProgress={isFollowingInProgress}
            />
        </>
    )


}

let mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowingInProgress: getIsFollowingInProgress(state)
})

let mapDispatchToProps = {
    followTC, unfollowTC, setCurrentPageAC,
    toggleIsFollowingInProgressAC, requestUsersTC
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)