import {combineReducers, createStore} from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import userReducer from "./userReducer";

let reducers = combineReducers({
     dialogPage:dialogReducer,
    messagePage:messageReducer,
    profilePage:profileReducer,
      usersPage:userReducer,
})

let store = createStore(reducers);


export default store;

