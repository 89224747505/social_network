import React from 'react';
import classes from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={classes.NavBar}>
            <div className={classes.container}>
                <div><a href="#1">Profile</a></div>
                <div><a href="#1">Messages</a></div>
                <div><a href="#1">News</a></div>
                <div><a href="#1">Music</a></div>
                <div><a href="#1">Settings</a></div>
            </div>
        </nav>
    );
};

export default NavBar;