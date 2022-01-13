import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let posts = props.profilePage["posts"];
    let newPostText = props.profilePage["newPostText"]
    let addPost = props.addPost;

    return (
        <div>
            <div className={classes.container}>
                <ProfileInfo />
                <MyPosts posts={posts} newPostText={newPostText} addPost={addPost} newPostTextChange={props.newPostTextChange}/>
            </div>
        </div>
    );
};

export default Profile;