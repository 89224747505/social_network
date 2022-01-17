import {combineReducers, createStore} from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let reducers = combineReducers({
     dialogPage:dialogReducer,
    messagePage:messageReducer,
    profilePage:profileReducer})

let store = createStore(reducers);

window.st = store;

export default store;

export const addPostCreator = () => ({type: ADD_POST}); // Создает объект для Диспатча, для управления рендером
export const updateNewPostCreator = (textMessage) => ({type: UPDATE_NEW_POST_TEXT, newMessage: textMessage}); // Создает объект для Диспатча, для управления рендером
export const addMessageCreator = () => ({type: ADD_MESSAGE}); // Создает объект для Диспатча, для управления рендером
export const updateNewMessageCreator = (textMessage) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: textMessage}); // Создает объект для Диспатча, для управления рендером

