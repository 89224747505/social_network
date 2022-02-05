import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setUsers,
    unfollow,
    setBlockBefore,
    setBlockAfter,
    setCurrentPage,
    setTotalCount,
    setIsFetching,
    setFollowingInProgress,
    setBaseURL
} from "../../redux/userReducer";
import Users from "./Users";
import {UserAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        UserAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setTotalCount(data.totalCount);
                this.props.setBaseURL(data.baseURL);
                this.props.setUsers(data.items);
                this.props.setIsFetching(false);
            })
    }

    onClickPageChanged = (el) =>{
        this.props.setIsFetching(true);
        this.props.setCurrentPage(el);
        UserAPI.getUsers(el, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
                this.props.setIsFetching(false);
            })
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
        authID:state.auth.id,
        followingInProgress: state.usersPage.followingInProgress,
        followingUser: state.usersPage.followingUser,
    }
};


export default connect(mapStateToProps,{follow,
    unfollow, setUsers, setTotalCount, setBaseURL, setBlockBefore, setBlockAfter, setCurrentPage, setIsFetching, setFollowingInProgress})(UsersContainer);