import React from 'react';
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.imDesContainer}>
                <img className={classes.imgDesktop} src={props.baseURL+'images/'+props.profile.photos.large} alt=""/>
             </div>
            <div className={classes.avaDesBlock}>
                <div className={classes.avatar} style={{ backgroundImage:`url(${props.baseURL+'images/'+props.profile.photos.small})` }}></div>
                <div className={classes.description}>
                    <h2>{props.profile.fullName}</h2>
                    <div>Нужна работа:<span style={{color: "red"}}>{props.profile.lookingForAJob ? " Да, конечно!!!" : " Нет, работа не требуется."}</span></div>
                    <div>Какая работа требуется:<span style={{color: "red"}}>{props.profile.lookingForAJobDescription}</span></div>
                    <div>Коротко обо мне:<span style={{color: "red"}}>{props.profile.aboutMe}</span></div>
                    <div>Facebook:<span style={{color: "red"}}>{props.profile.contacts.facebook}</span></div>
                    <div>Web-site:<span style={{color: "red"}}>{props.profile.contacts.website}</span></div>
                    <div>VK:<span style={{color: "red"}}>{props.profile.contacts.vk}</span></div>
                    <div>Twitter:<span style={{color: "red"}}>{props.profile.contacts.twitter}</span></div>
                    <div>Instagram:<span style={{color: "red"}}>{props.profile.contacts.instagram}</span></div>
                    <div>Youtube:<span style={{color: "red"}}>{props.profile.contacts.youtube}</span></div>
                    <div>Git-hub:<span style={{color: "red"}}>{props.profile.contacts.github}</span></div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;