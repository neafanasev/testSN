import React from 'react';
import {connect} from "react-redux";
import {
    followTC as follow,
    unfollowTC as unfollow,
    setCurrentPageAC as setCurrentPage,
    toggleIsFollowingInProgressAC as toggleIsFollowingInProgress,
    getUsersTC as getUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
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


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}

let mapDispatchToPropsObj = {
    follow, unfollow, setCurrentPage,
    toggleIsFollowingInProgress, getUsers
}

const UsersContainerC = compose(
    connect(mapStateToProps, mapDispatchToPropsObj),
    withAuthRedirect
)(UsersContainer)

export default UsersContainerC