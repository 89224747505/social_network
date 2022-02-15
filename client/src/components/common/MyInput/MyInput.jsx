import React from 'react';
import classes from "./MyInput.module.css";

const MyInput = ({input, meta, ...props}) => {
    return (
        <div>
            <input className={meta.error && meta.touched ? classes.errInput : classes.inputOk} {...input} {...props}/>
            {meta.error && meta.touched && <span className={classes.Error}>*{meta.error}</span>}
        </div>
    );
};

export default MyInput;