import React from 'react';
import classes from './Header.module.css'
import NavItem from "../common/NavItem/NavItem";

const Header = () => {
    return (
        <header className={classes.Header}>
            <div className={classes.header__image}></div>
            <div className={classes.loginBlock}>
                <NavItem to={'/login'}>Login</NavItem>
            </div>
        </header>
    );
};

export default Header;