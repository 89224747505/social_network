import React from "react";
import classes from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";
import MyButton from "../common/MyButton/MyButton";
import {NavLink} from "react-router-dom";
import {UserAPI} from "../../api/api";
import {setUserFollowThunk} from "../../redux/userReducer";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = props.currentTwentyBlock + 1; i <= props.currentTwentyBlock + 20; i++) {
        if (i <= pagesCount) pages.push(i);
        else break;
    }

    return (
        <div className={classes.container}>
            <div className={classes.pagenation}>
                <div onClick={props.setBlockBefore}>&#60;</div>
                {pages.map(el => <div onClick={() => props.onClickPageChanged(el)}
                                      className={(props.currentPage === el) && classes.selectedPage}>{el}</div>)}
                <div onClick={props.setBlockAfter}>&#62;</div>
            </div>
            <Preloader isFetching={props.isFetching}/>
            {
                props.users.map(u => <div className={classes.wrapper} key={u.id}>
                    <div className={classes.avatarFollow}>
                        <div>
                            <NavLink to={'/profile/' + u.id}><img className={classes.img} src={u.photos.small ? props.baseURL+'images/'+u.photos.small : "https://www.pngmart.com/files/10/Business-User-Account-PNG-Clipart.png"}/></NavLink>
                        </div>
                        {props.authID !== u.id
                            ? <div className={classes.btn}>
                                {u.followed
                                    ? <MyButton disabled={props.followingInProgress && (u.id === props.followingUser)} onClick={() => {
                                        props.setUserFollowThunk(u.id,"UNFOLLOW");
                                    }}> Отписаться </MyButton>

                                    : <MyButton disabled={props.followingInProgress && (u.id === props.followingUser)} onClick={() => {
                                        props.setUserFollowThunk(u.id, "FOLLOW");
                                    }}> Подписаться </MyButton>}
                            </div>
                            : <div><MyButton disabled={true}>Ваш профиль</MyButton></div>}
                    </div>
                    <div className={classes.userForm}>
                        <div>
                            <div className={classes.fullName}>{u.name}</div>
                            <div>{u.status ?
                                (u.status.length>50 ? u.status.substr(0,50): u.status)
                                : "Статус не определен"}</div>
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

export default Users;