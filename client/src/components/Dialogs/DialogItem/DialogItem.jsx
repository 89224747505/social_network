import React from 'react';
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={classes.item}>
            <NavLink className={navData => navData.isActive ? classes.active : classes.item}
                     to={path}>{props.name}</NavLink>
        </div>
    );
}
export default DialogItem;