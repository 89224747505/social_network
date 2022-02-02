import {combineReducers, createStore} from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
     dialogPage:dialogReducer,
    messagePage:messageReducer,
    profilePage:profileReducer,
      usersPage:userReducer,
           auth:authReducer,
})

let store = createStore(reducers);

export default store;

