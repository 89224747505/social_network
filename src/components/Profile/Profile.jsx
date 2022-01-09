import React from 'react';
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <content className={classes.Profile}>
            <div className={classes.container}>
                <div className={classes.imDesContainer}><div className={classes.imageDesktop}></div></div>
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
                <MyPosts />
            </div>
        </content>
    );
};

export default Profile;