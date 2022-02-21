import {UserAPI} from "../api/api";
import {InitialStateType, AuthUserDataType, SetJwtType, SetErrorAuthType} from "./types/authReducerTypes";

export const AUTH_USER_DATA = "AUTH_USER_DATA";
export const SET_JWT = "SET_JWT";
export const SET_ERROR_AUTH = "SET_ERROR_AUTH";

let initialState:InitialStateType = {
    authMessage:'',
    idAuth: null,
    jwt: "",
    login: "",
    email: "",
    isAuth: false,
    errorAuth: false,
};

const authReducer = (state:InitialStateType = initialState, action:any):InitialStateType => {
    switch (action.type) {

        case AUTH_USER_DATA:
            return {...state, isAuth: true, idAuth: action.payload.idUser, login:action.payload.login, email: action.payload.email};

        case SET_JWT:
            return {...state, jwt:action.payload};

        case SET_ERROR_AUTH:
            return {...state, errorAuth:action.payload.err, authMessage: action.payload.message, isAuth: !action.payload.err};

        default:
            return state;
    }
}

const authUserData =
    (idUser:number, login:string, email:string):AuthUserDataType => ({type: AUTH_USER_DATA, payload:{idUser, login, email}});

const setJWT = (jwt:string):SetJwtType => ({type: SET_JWT, payload:jwt});

const setErrorAuth = (err:boolean, message:string):SetErrorAuthType => ({type: SET_ERROR_AUTH, payload:{err, message}});

export const getUserLoginThunk = (login, email, password) => (dispatch:any) => {

    UserAPI.getLoginUser(login, email, password)
        .then(data => {
            localStorage.setItem('jwt', data.jwt)
            dispatch(setJWT(data.jwt));
            dispatch(authUserData(data.id, login, email));
            dispatch(setErrorAuth(false, ""));})
        .catch(e => {
            debugger;
            dispatch(setErrorAuth(true, e.response.data.message))});

}

export const userLogOutThunk = (jwt) => (dispatch:any) => {
    UserAPI.setUserLogOut(jwt)
        .then(data => {
            dispatch(authUserData(null,null,null));
            dispatch(setErrorAuth(true, ""));
            dispatch(setJWT(""));
        })
        .catch(e => {
            dispatch(setErrorAuth(true, e.response.data.message))
        });
}
export default authReducer;