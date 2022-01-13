import React from 'react';
import classes from "./MessageItem.module.css";


const MessageItem = (props) => {
    return (
        <div className={classes.messageContainer}>
            <div className={classes.imgAndName}>
                <div className={classes.imgMessage}>
                    <img src={props.imgpath}/>
                </div>
                <div className={classes.userName}>{props.userName}</div>
            </div>
            <div className={classes.messageArea}>{props.text}</div>
        </div>
    );
}

export default MessageItem;