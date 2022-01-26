import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    followAC,
    setUsersAC,
    unfollowAC,
    setBlockBeforeAC,
    setBlockAfterAC,
    setCurrentPageAC,
    setTotalCountAC
} from "../../redux/userReducer";

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
        setUsers: (users) => dispatch(setUsersAC(users)),
        setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
        setBlockBefore: () => dispatch(setBlockBeforeAC()),
        setBlockAfter: () => dispatch(setBlockAfterAC()),
        setCurrentPage: (current) => dispatch(setCurrentPageAC(current)),
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Users);