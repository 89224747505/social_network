import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let postPage = props.postPage;

    return (
        <div>
            <div className={classes.container}>
                <ProfileInfo />
                <MyPosts postPage={postPage}/>
            </div>
        </div>
    );
};

export default Profile;