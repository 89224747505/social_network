import React from 'react';
import classes from "./NavItem.module.css";
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <div className={classes.item}>
            <NavLink className = { Bool => Bool.isActive ? classes.active : classes.item } to={props.to} >{props.children}</NavLink>
        </div>
    );
};

export default NavItem;