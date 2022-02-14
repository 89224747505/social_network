import React, {useEffect, useState} from 'react';
import classes from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {

    const [active, setActive] = useState(0);

    const [status, setStatus] = useState(1);

    useEffect(()=>{
        setStatus(props.profile.status);
    },[props.profile.status]);

    let activateForm = () => setActive(true);

    let deactivateForm = (event) => {
        props.setUserStatusThunk(props.profile.userId,event.target.value)
        setActive(false);
    }

    let onChangeStatus = (event) => setStatus(event.target.value);

    return (
        <div>

            <div className={classes.imDesContainer}>
                <img className={classes.imgDesktop} src={props.baseURL+'images/'+props.profile.photos.large} alt=""/>
             </div>

            <div className={classes.avaDesBlock}>

                <div className={classes.avatar} style={{ backgroundImage:`url(${props.baseURL+'images/'+props.profile.photos.small})` }}></div>

                <div className={classes.nameStatus}>
                    <div className={classes.fullname}>{props.profile.fullName}</div>
                    {active && props.authUserId == props.profile.userId
                        ? <textarea className={classes.status}
                                 autoFocus={true}
                                 onBlur={deactivateForm}
                                 onChange={onChangeStatus}
                                 value={status}/>
                        : <div className={classes.status} onClick={activateForm}>{props.profile.status}</div>}
                </div>

                <div className={classes.description}>
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