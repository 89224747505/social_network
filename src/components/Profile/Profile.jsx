import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redux/store";

const Profile = (props) => {
    return (
        <div>
            <div className={classes.container}>
                <ProfileInfo/>
                <MyPosts store={props.store} dispatch={props.dispatch}/>
            </div>
        </div>
    );
};

export default Profile;