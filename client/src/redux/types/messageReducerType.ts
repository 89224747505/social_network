import {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "../messageReducer";

export type MessageItemType = {
    id:number | null;
    name:string | null;
    imgPath: string | null;
    text:string | null;
}

export type InitialStateType = {
    messages: Array<MessageItemType>;
    newMessageText: string | null;
}

export type AddMessageType = {
    type: typeof ADD_MESSAGE;
}

export type UpdateNewMessageTextType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT;
    payload: string;
}