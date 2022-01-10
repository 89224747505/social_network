import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.Header}>
            <div className={classes.header__image}></div>
            <div className={classes.menu}>
                <div>About</div>
                <div>Content</div>
                <div>Master</div>
                <div>Slave</div>
                <div>Connection</div>
            </div>
        </header>
    );
};

export default Header;