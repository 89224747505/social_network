import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {addMessageCreator, updateNewMessageCreator} from "../../redux/store";


const Dialogs = (props) => {
    let messagePage = props.message; //Загрузка messageData из props
    let dialogPage = props.dialog; //Загрузка dataElements из props

    //Массив элементов MessageItem
    let messageElements = messagePage.messages
        .map(message => <MessageItem userId={message.id} userName={message.name} imgpath={message.imgpath}
                                     text={message.text}/>)

    //Массив элементов DialogItem
    let dialogElements = dialogPage
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let addMessageOnClick = () => props.addMessage();

    let onChangeMessage = (event) => props.updateMessageOnChange(event.target.value);

    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.userDialogs}>
                    <div className={classes.titleDialogs}>Диалоги</div>
                    {dialogElements}
                </div>
                <div className={classes.userMessages}>
                    {messageElements}
                </div>
                <div className={classes.textAreaBtn}>
                    <textarea placeholder="Enter your message:" onChange={onChangeMessage} className={classes.messageArea}
                              value={messagePage.newMessageText}/>
                    <div className={classes.messageBtn}>
                        <button onClick={addMessageOnClick}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;