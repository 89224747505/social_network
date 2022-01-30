import React from 'react';
import {connect} from "react-redux";
import {follow, setUsers, unfollow, setBlockBefore, setBlockAfter, setCurrentPage, setTotalCount, setIsFetching}  from "../../redux/userReducer";
import axios from "axios";
import Users from "./Users";
import {getUsers} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then(response => {
                this.props.setTotalCount(response.data.totalCount);
                this.props.setUsers(response.data.items);
                this.props.setIsFetching(false);
            })
    }

    onClickPageChanged = (el) =>{
        this.props.setIsFetching(true);
        this.props.setCurrentPage(el);
        getUsers(el, this.props.pageSize).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setIsFetching(false);
            })
    }

    render() {
        return <Users {...this.props} onClickPageChanged={this.onClickPageChanged}/>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        currentTwentyBlock: state.usersPage.currentTwentyBlock,
        isFetching: state.usersPage.isFetching,
        authID:state.auth.id,
    }
};


export default connect(mapStateToProps,{follow, unfollow, setUsers, setTotalCount, setBlockBefore, setBlockAfter, setCurrentPage, setIsFetching})(UsersContainer);