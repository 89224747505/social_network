import React from 'react';
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const MessageItem = (props) => {
    return (
        <div className={classes.messageContainer}>
            <div className={classes.imgAndName}>
                <div className={classes.imgMessage}>
                    <img src={props.imgpath}/>
                </div>
                <div className={classes.userName}>{props.userName}</div>
            </div>
            <div className={classes.messageArea}>{props.text}</div>
        </div>
    );
}

const DialogItem = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={classes.item}>
            <NavLink className={navData => navData.isActive ? classes.active : classes.item}
                     to={path}>{props.name}</NavLink>
        </div>
    );
}

const Dialogs = (props) => {
    let messageData = [
        {
            id: 1,
            name: "Иван1",
            imgpath: "https://ggscore.com/media/logo/t25596.png?64",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            id: 2,
            name: "Иван2",
            imgpath: "https://ggscore.com/media/logo/t25596.png?64",
            text: "doloribus iste, fugit, quam sed obcaecati aliquid officia, quod fuga, est nemo deleniti dolorem"
        },
        {
            id: 3,
            name: "Иван3",
            imgpath: "https://ggscore.com/media/logo/t25596.png?64",
            text: "tempore sequi, dicta doloremque ducimus quidem porro saepe animi voluptas nesciunt libero ipsam"
        },
        {
            id: 4,
            name: "Иван4",
            imgpath: "https://ggscore.com/media/logo/t25596.png?64",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            id: 5,
            name: "Иван5",
            imgpath: "https://ggscore.com/media/logo/t25596.png?64",
            text: "tempore sequi, dicta doloremque ducimus quidem porro saepe animi voluptas nesciunt libero ipsam"
        },
        {
            id: 6,
            name: "Иван6",
            imgpath: "https://ggscore.com/media/logo/t25596.png?64",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            id: 7,
            name: "Иван7",
            imgpath: "https://ggscore.com/media/logo/t25596.png?64",
            text: "doloribus iste, fugit, quam sed obcaecati aliquid officia, quod fuga, est nemo deleniti dolorem"
        },
    ];
    // Объекты диалога. Его элементы, т.е. ID и Имя пользователя
    let dataDialogs = [
        {id: 1, name: 'Иван'},
        {id: 2, name: 'Иннокентий'},
        {id: 3, name: 'Петр'},
        {id: 4, name: 'Афонасий'},
        {id: 5, name: 'Акакий'},
        {id: 6, name: 'Серафим'},
        {id: 7, name: 'Яков'},
        {id: 8, name: 'Феоктист'},
        {id: 9, name: 'Лазарь'},
        {id: 10, name: 'Мойша'},
        {id: 11, name: 'Пульманорадос'},
    ];

    //Массив элементов DialogItem
    let dialogElements = dataDialogs
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.userDialogs}>
                    <div className={classes.titleDialogs}>Диалоги</div>
                    {dialogElements}
                </div>
                <div className={classes.userMessages}>
                    <MessageItem userId={messageData[0].id} userName={messageData[0].name}
                                 imgpath={messageData[0].imgpath} text={messageData[0].text}/>
                    <MessageItem userId={messageData[1].id} userName={messageData[1].name}
                                 imgpath={messageData[1].imgpath} text={messageData[1].text}/>
                    <MessageItem userId={messageData[2].id} userName={messageData[2].name}
                                 imgpath={messageData[2].imgpath} text={messageData[2].text}/>
                    <MessageItem userId={messageData[3].id} userName={messageData[3].name}
                                 imgpath={messageData[3].imgpath} text={messageData[3].text}/>
                    <MessageItem userId={messageData[4].id} userName={messageData[4].name}
                                 imgpath={messageData[4].imgpath} text={messageData[4].text}/>
                    <MessageItem userId={messageData[5].id} userName={messageData[5].name}
                                 imgpath={messageData[5].imgpath} text={messageData[5].text}/>
                    <MessageItem userId={messageData[6].id} userName={messageData[6].name}
                                 imgpath={messageData[6].imgpath} text={messageData[6].text}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;