import {AddMessageType, InitialStateType, UpdateNewMessageTextType} from "./types/messageReducerType"

export const ADD_MESSAGE = "ADD-MESSAGE";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initState:InitialStateType = {
    messages: [
        {
            id: 1,
            name: "Евстафий",
            imgPath: "https://ggscore.com/media/logo/t25596.png?64",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            id: 2,
            name: "Анатолий",
            imgPath: "https://ggscore.com/media/logo/t25596.png?64",
            text: "doloribus iste, fugit, quam sed obcaecati aliquid officia, quod fuga, est nemo deleniti dolorem"
        },
    ],
    newMessageText: "",
};

const messageReducer = (state = initState, action:any):InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:{
            let newMessage = {
                id: 0,
                name: "newname",
                imgPath: "https://tlgrm.ru/_/stickers/f7f/946/f7f9463f-3b6f-3c48-a7ca-dfa418ba2aaf/1.webp",
                text: state.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = "";
            return stateCopy;}
        case UPDATE_NEW_MESSAGE_TEXT:{
            let stateCopy = {...state};
            stateCopy.newMessageText = action.payload;
            return stateCopy;}
        default:
            return state;
    }
}

export const addMessageAC = ():AddMessageType => ({type: ADD_MESSAGE}); // Создает объект для Диспатча, для управления рендером
export const updateMessageAC = (textMessage:string):UpdateNewMessageTextType =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, payload: textMessage}); // Создает объект для Диспатча, для управления рендером

export default messageReducer;