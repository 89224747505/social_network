import React from 'react';
import "./Users.module.css";
import classes from "../Users/Users.module.css";
import axios from "axios";


class Users extends React.Component {

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

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = this.props.currentTwentyBlock+1; i <= this.props.currentTwentyBlock+20; i++) {
            if (i <= pagesCount) pages.push(i);
            else break;
        }

        return (
            <div className={classes.container}>
                <div className={classes.pagenation}>
                    <div onClick={this.props.setBlockBefore}>&#60;</div>
                    {pages.map(el => <div onClick={()=>this.onClickPageChanged(el)} className={(this.props.currentPage === el) && classes.selectedPage}>{el}</div>)}
                    <div onClick={this.props.setBlockAfter}>&#62;</div>
                </div>


                {
                    this.props.users.map(u => <div className={classes.wrapper} key={u.id}>
                        <div>
                            <div><img className={classes.img}
                                      src={u.photos.small ? u.photos.small : "https://www.pngmart.com/files/10/Business-User-Account-PNG-Clipart.png"}/>
                            </div>
                            <div className={classes.btn}>
                                {u.followed
                                    ? <button onClick={() => this.props.unfollow(u.id)}> Отписаться </button>
                                    : <button onClick={() => this.props.follow(u.id)}> Подписаться </button>}
                            </div>
                        </div>
                        <div className={classes.userForm}>
                            <div>
                                <div className={classes.fullName}>{u.name}</div>
                                <div>{u.status ? u.status : "Статус не определен"}</div>
                            </div>
                            <div>
                                <div>{u.uniqueUrlName}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        );
    }
}

export default Users;