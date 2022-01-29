import React from "react";
import classes from "./Users.module.css";
import Spinner from '../../img/Spinner.svg';
import Preloader from "../common/Preloader/Preloader";

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
                    <div>
                        <div><img className={classes.img}
                                  src={u.photos.small ? u.photos.small : "https://www.pngmart.com/files/10/Business-User-Account-PNG-Clipart.png"}/>
                        </div>
                        <div className={classes.btn}>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}> Отписаться </button>
                                : <button onClick={() => props.follow(u.id)}> Подписаться </button>}
                        </div>
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