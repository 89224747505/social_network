import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import MyButton from "../../common/MyButton/MyButton";

const MyPosts = (props) => {

    let postElement = props.posts
        .map(i => <Post key={i.id} text={i.text} imgUrl={i.imgUrl} likesCounter={i.likesCounter}
                        dislikesCounter={i.dislikesCounter}/>)

    let addPostOnClick = () => props.addPost();

    let onChangePost = (event) => props.updateNewPostText(event.target.value);

    return (<div className={classes.MyPosts}>
        <div className={classes.descriptionPost}>My posts</div>
        <div className={classes.postContainer}>
            <textarea placeholder="Enter your post:" onChange={onChangePost} className={classes.post} value={props.newPostText}/>
            <MyButton onClick={addPostOnClick}>Add post</MyButton>
        </div>
        {postElement}
    </div>);
};

export default MyPosts;