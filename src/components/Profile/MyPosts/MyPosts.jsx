import React from 'react';
import classes from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div className={classes.MyPosts}>
            <div className={classes.descriptionPost}>My posts</div>
            <div className={classes.postContainer}>
                <textarea className={classes.post}></textarea>
                <div className={classes.postButton}>
                    <a href="#1">Add post</a>
                </div>
            </div>
        </div>
    );
};

export default MyPosts;