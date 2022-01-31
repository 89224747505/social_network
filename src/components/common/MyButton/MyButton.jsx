import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = (props) => {
    return (
        <div className={classes.MyButton}>
            <button {...props}>{props.children}</button>
        </div>
    );
};

export default MyButton;