import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setBlockBefore,
    setBlockAfter,
    setCurrentPage,
    setFollowingInProgress,
    getUsersThunk,
    setUserFollowThunk
} from "../../redux/userReducer";
import Users from "./Users";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import compose from "lodash/fp/compose";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize, this.props.jwt);
    }

    onClickPageChanged = (currentPage) =>{
        this.props.setCurrentPage(currentPage);
        this.props.getUsersThunk(currentPage, this.props.pageSize, this.props.jwt);
    }

    render() {
        return <Users {...this.props} onClickPageChanged={this.onClickPageChanged}/>
    }
}


let mapStateToProps = (state) => {
    return {
        baseURL:state.usersPage.baseURL,
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        currentTwentyBlock: state.usersPage.currentTwentyBlock,
        isFetching: state.usersPage.isFetching,
        authID:state.auth.idAuth,
        jwt: state.auth.jwt,
        followingInProgress: state.usersPage.followingInProgress,
        followingUser: state.usersPage.followingUser,
    }
};

export default compose(
    connect(mapStateToProps, {follow, unfollow, setBlockBefore, setBlockAfter,
        setCurrentPage, setFollowingInProgress, getUsersThunk, setUserFollowThunk}),
    withAuthRedirect
)(UsersContainer);