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
import {
    getBaseURL,
    getCurrentPage,
    getCurrentTwentyBlock, getFollowingInProgress, getFollowingUser, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../selectors/userSelectors";
import {getIDAuth, getJWT} from "../../selectors/authSelector";



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
        baseURL:getBaseURL(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        currentTwentyBlock: getCurrentTwentyBlock(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        followingUser: getFollowingUser(state),
        authID: getIDAuth(state),
        jwt: getJWT(state),

    }
};

export default compose(
    connect(mapStateToProps, {follow, unfollow, setBlockBefore, setBlockAfter,
        setCurrentPage, setFollowingInProgress, getUsersThunk, setUserFollowThunk}),
    withAuthRedirect
)(UsersContainer);