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
import {UserAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    onClickPageChanged = (el) =>{
        this.props.setCurrentPage(el);
        this.props.getUsersThunk(el, this.props.pageSize);
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
        followingInProgress: state.usersPage.followingInProgress,
        followingUser: state.usersPage.followingUser,
    }
};


export default connect(mapStateToProps,{follow, unfollow, setBlockBefore, setBlockAfter,
                                        setCurrentPage, setFollowingInProgress, getUsersThunk, setUserFollowThunk})(UsersContainer);