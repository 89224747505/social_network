import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElement = props.posts
        .map(i => <Post text={i.text} imgUrl={i.imgUrl} likesCounter={i.likesCounter}
                        dislikesCounter={i.dislikesCounter}/>)

    let addPostOnClick = () => props.addPost();

    let onChangePost = (event) => props.updateNewPostText(event.target.value);

    return (<div className={classes.MyPosts}>
        <div className={classes.descriptionPost}>My posts</div>
        <div className={classes.postContainer}>
            <textarea placeholder="Enter your post:" onChange={onChangePost} className={classes.post} value={props.newPostText}/>
            <div className={classes.postButton}>
                <button onClick={addPostOnClick}>Add post</button>
            </div>
        </div>
        {postElement}
    </div>);
};

export default MyPosts;