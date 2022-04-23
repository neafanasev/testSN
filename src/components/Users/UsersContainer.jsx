import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    followTC as follow,
    unfollowTC as unfollow,
    setCurrentPageAC as setCurrentPage,
    toggleIsFollowingInProgressAC as toggleIsFollowingInProgress,
    requestUsersTC as requestUsers
} from "../../redux/users-reducer";
import {
    getUsers,
    getCurrentPage,
    getIsFetching,
    getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors";




class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        debugger
        const {totalUsersCount, pageSize, users, currentPage, isFetching, follow, unfollow, isFollowingInProgress} = this.props
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   users={users}
                   currentPage={currentPage}
                   isFetching={isFetching}
                   onPageChanged={this.onPageChanged}
                   follow={follow}
                   unfollow={unfollow}
                   isFollowingInProgress={isFollowingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowingInProgress: getIsFollowingInProgress(state)
})

let mapDispatchToPropsObj = {
    follow, unfollow, setCurrentPage,
    toggleIsFollowingInProgress, requestUsers
}

const UsersContainerC = compose(
    connect(mapStateToProps, mapDispatchToPropsObj),
)(UsersContainer)

export default UsersContainerC