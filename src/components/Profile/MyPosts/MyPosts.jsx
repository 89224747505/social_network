import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.posts;
    //Массив тегов-компонентов Post, которые беруться из postData и помещаются postElement в JSX коде
    let postElement = posts
        .map(i => <Post text={i.text} imgUrl={i.imgUrl} likesCounter={i.likesCounter} dislikesCounter={i.dislikesCounter}/>)

    let newPostElement = React.createRef();


    let addPostOnClick = () => {
        if (newPostElement.current.value !== "") {
            props.addPost();
        }
    }

    let onChangePost =() => {
        props.newPostTextChange(newPostElement.current.value);
    }

    return (<div className={classes.MyPosts}>
        <div className={classes.descriptionPost}>My posts</div>
        <div className={classes.postContainer}>
            <textarea ref={newPostElement} onChange={onChangePost} className={classes.post} value={props.newPostText}/>
            <div className={classes.postButton}>
                <button onClick={addPostOnClick}>Add post</button>
            </div>
        </div>
        {postElement}
    </div>);
};

export default MyPosts;