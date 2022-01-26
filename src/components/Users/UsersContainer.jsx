import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsers, unfollowAC} from "../../redux/userReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        currentTwentyBlock: state.usersPage.currentTwentyBlock,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsers(users)),
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Users);