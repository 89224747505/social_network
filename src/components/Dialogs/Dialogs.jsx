import React from 'react';
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    let messagePage = props.messagePage; //Загрузка messageData из props
    let dialogPage = props.dialogPage; //Загрузка dataElements из props


    //Массив элементов MessageItem
    let messageElements = messagePage
        .map(message => <MessageItem userId={message.id} userName={message.name} imgpath={message.imgpath}
                                     text={message.text}/>)

    //Массив элементов DialogItem
    let dialogElements = dialogPage
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let newMessageElement = React.createRef();

    const addMessage = () => {
        if (newMessageElement.current.value !== "") alert(newMessageElement.current.value);

    }
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
                    <textarea ref={newMessageElement} className={classes.messageArea} placeholder="Write something:"></textarea>
                    <div className={classes.messageBtn}>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;