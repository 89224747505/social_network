import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.Header}>
            <div className={classes.header__image}></div>
            <div className={classes.menu}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    );
};

export default Header;