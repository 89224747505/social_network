import {combineReducers, createStore, applyMiddleware} from "redux";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
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

