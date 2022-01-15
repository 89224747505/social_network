import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostCreator, updateNewPostCreator} from "../../../redux/store";

const MyPosts = (props) => {

    let profilePage = props.store.getState().profilePage;

    //Массив тегов-компонентов Post, которые беруться из postData и помещаются postElement в JSX коде
    //Выводит весь массив в UI Post
    let postElement = profilePage.posts
        .map(i => <Post text={i.text} imgUrl={i.imgUrl} likesCounter={i.likesCounter}
                        dislikesCounter={i.dislikesCounter}/>)

    let addPostOnClick = () => props.dispatch(addPostCreator());

    let onChangePost = (event) => props.dispatch(updateNewPostCreator(event.target.value));

    return (<div className={classes.MyPosts}>
        <div className={classes.descriptionPost}>My posts</div>
        <div className={classes.postContainer}>
            <textarea placeholder="Enter your post:" onChange={onChangePost} className={classes.post} value={profilePage.newPostText}/>
            <div className={classes.postButton}>
                <button onClick={addPostOnClick}>Add post</button>
            </div>
        </div>
        {postElement}
    </div>);
};

export default MyPosts;