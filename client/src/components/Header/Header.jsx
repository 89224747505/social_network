import React, {useEffect, useState} from 'react';
import classes from './Header.module.css'
import NavItem from "../common/NavItem/NavItem";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const [form, setForm] = useState(false);
    useEffect(()=>{
        setForm(false);
    },[props.isAuth]);

    const openForm = () => setForm(!form)

    return (
        <header className={classes.Header}>
            <div className={classes.header__image}></div>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div className={classes.login}>{props.login}
                        <div onMouseLeave={openForm} className={form ? classes.activeForm : classes.disableForm}>
                            <NavLink className={classes.listElement} to={'/login'}>Sign in</NavLink>
                            <div onClick={props.userLogOut} className={classes.listElement}>Log out</div>
                        </div>
                        <span onMouseOver={openForm} style={{cursor:'pointer',color:'black', fontSize:'16px', paddingLeft:'6px'}}>&#9660;</span>
                </div>
                    : <NavItem to={'/login'}>Login</NavItem>}
            </div>
        </header>
    );
};

export default Header;