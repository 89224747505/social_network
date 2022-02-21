import {combineReducers, createStore, applyMiddleware} from "redux";
import messageReducer from "./messageReducer.ts";
import profileReducer from "./profileReducer.ts";
import dialogReducer from "./dialogReducer.ts";
import userReducer from "./userReducer.ts";
import authReducer from "./authReducer.ts";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
     dialogPage:dialogReducer,
    messagePage:messageReducer,
    profilePage:profileReducer,
      usersPage:userReducer,
           auth:authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

