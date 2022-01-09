import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.Post}>
            <div className={classes.imgPost}><img src={props.imgUrl} /></div>
            <div className={classes.postFrame}>
                <div>
                    {props.text}
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.like}></div>
                <div className={classes.dislike}></div>
                <div className={classes.share}></div>
            </div>
        </div>
    );
};

export default Post;