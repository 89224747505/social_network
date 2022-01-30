import React from 'react';
import classes from './Header.module.css'
import NavItem from "../common/NavItem/NavItem";

const Header = (props) => {
    return (
        <header className={classes.Header}>
            <div className={classes.header__image}></div>
            <div className={classes.loginBlock}>
                {props.isAuth ? <div className={classes.login}>{props.login}<span style={{color:'black'}}>&#9660;</span></div> : <NavItem to={'/login'}>Login</NavItem>}
            </div>
        </header>
    );
};

export default Header;