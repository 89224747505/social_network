import React from 'react';
import {connect} from "react-redux";
import {follow, setUsers, unfollow, setBlockBefore, setBlockAfter, setCurrentPage, setTotalCount}  from "../../redux/userReducer";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setTotalCount(response.data.totalCount);
                this.props.setUsers(response.data.items);
            })
    }

    onClickPageChanged = (el) =>{
        this.props.setCurrentPage(el);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
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
    }
};


export default connect(mapStateToProps,{follow, unfollow, setUsers, setTotalCount, setBlockBefore, setBlockAfter, setCurrentPage,})(UsersContainer);