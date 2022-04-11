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
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   isFetching={this.props.isFetching}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFollowingInProgress={this.props.isFollowingInProgress}
            />
        </>
    }
}


// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFollowingInProgress: state.usersPage.isFollowingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state)
    }
}

let mapDispatchToPropsObj = {
    follow, unfollow, setCurrentPage,
    toggleIsFollowingInProgress, requestUsers
}

const UsersContainerC = compose(
    connect(mapStateToProps, mapDispatchToPropsObj),
)(UsersContainer)

export default UsersContainerC