import React from 'react';
import classes from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.imDesContainer}>
                <img className={classes.imgDesktopSide} src="https://starwars-galaxy.ru/800/600/https/www.clipartmax.com/png/full/107-1073008_big-image-dog-animal-clipart.png" alt=""/>
                <img className={classes.imgDesktop} src="https://86kcson.ru/upload/medialibrary/1e6/Vygul-sobak.png" alt=""/>
                <img className={classes.imgDesktopSide} src="https://starwars-galaxy.ru/800/600/https/www.clipartmax.com/png/full/107-1073008_big-image-dog-animal-clipart.png" alt=""/>
            </div>
            <div className={classes.avaDesBlock}>
                <div className={classes.avatar}></div>
                <div className={classes.description}>
                    <h2>Зырянов Иван</h2>
                    <div>Дата рождения: 06 декабря 1984 года</div>
                    <div>Город: Тюмень</div>
                    <div>Образование: ТИУ, ТГУ</div>
                    <div>Веб-сайт: https://jzyr.ru</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;