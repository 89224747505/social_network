import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postPage = props.postPage;
    //Массив тегов-компонентов Post, которые беруться из postData и помещаются postElement в JSX коде
    let postElement = postPage
        .map(i => <Post text={i.text} imgUrl={i.imgUrl} likesCounter={i.likesCounter} dislikesCounter={i.dislikesCounter}/>)


    return (<div className={classes.MyPosts}>
        <div className={classes.descriptionPost}>My posts</div>
        <div className={classes.postContainer}>
            <textarea className={classes.post} placeholder="Write new post:"></textarea>
            <div className={classes.postButton}>
                <button>Add post</button>
            </div>
        </div>
        {postElement}
    </div>);
};

export default MyPosts;