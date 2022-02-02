import React from 'react';
import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";
import NavItem from "../common/NavItem/NavItem";

const NavBar = () => {
    return (
        <nav className={classes.NavBar}>
            <div className={classes.container}>
                <NavItem to="/profile">Profile</NavItem>
                <NavItem to="/messages">Messages</NavItem>
                <NavItem to="/users">Users</NavItem>
                <NavItem to="/news">News</NavItem>
                <NavItem to="/music">Music</NavItem>
                <NavItem style={{marginTop:'35px'}} to="/settings">Settings</NavItem>
            </div>
        </nav>
    );
};

export default NavBar;