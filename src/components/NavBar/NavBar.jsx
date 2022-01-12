import React from 'react';
import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.NavBar}>
            <div className={classes.container}>
                <div className={classes.item}>
                    <NavLink className = { Bool => Bool.isActive ? classes.active : classes.item } to="/profile" >Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink className = { Bool => Bool.isActive ? classes.active : classes.item } to="/messages" >Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink className = { Bool => Bool.isActive ? classes.active : classes.item } to="/news" >News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink className = { Bool => Bool.isActive ? classes.active : classes.item } to="/music" >Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink className = { Bool => Bool.isActive ? classes.active : classes.item } to="/settings" >Settings</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;