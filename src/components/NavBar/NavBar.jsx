import React from 'react';
import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.NavBar}>
            <div className={classes.container}>
                <div><NavLink to="/profile">Profile</NavLink></div>
                <div><NavLink to="/messages">Messages</NavLink></div>
                <div><NavLink to="/news">News</NavLink></div>
                <div><NavLink to="/music">Music</NavLink></div>
                <div><NavLink to="/settings">Settings</NavLink></div>
            </div>
        </nav>
    );
};

export default NavBar;