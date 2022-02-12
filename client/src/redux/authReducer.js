import {UserAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const AUTH_USER_DATA = "AUTH_USER_DATA";
const UPDATE_LOGIN_TEXT = "UPDATE_LOGIN_TEXT";
const UPDATE_EMAIL_TEXT = "UPDATE_EMAIL_TEXT";
const UPDATE_PASSWORD_TEXT = "UPDATE_PASSWORD_TEXT";
const SET_JWT = "SET_JWT";
const SET_ERROR_AUTH = "SET_ERROR_AUTH";

let initReducer = {
    idAuth: null,
    jwt: "",
    login: "",
    email: "",
    password: "",
    isAuth: false,
    errorAuth: false,
};

const authReducer = (state = initReducer, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return  {
                ...state,
                isAuth:action.userData.message,
                idAuth:action.userData.id,
                jwt:action.userData.jwt,
                login:action.userData.login
            };
        case AUTH_USER_DATA:
            return {...state, password: "", isAuth: true, idAuth: action.idUser};

        case UPDATE_LOGIN_TEXT:
            return {...state, login:action.login};

        case UPDATE_EMAIL_TEXT:
            return {...state, email: action.email};

        case UPDATE_PASSWORD_TEXT:
            return {...state, password: action.password};

        case SET_JWT:
            return {...state, jwt:action.jwt};

        case SET_ERROR_AUTH:
            return {...state, errorAuth:action.err};

        default:
            return state;
    }
}

export const setAuthUserData = (userData) => ({type: SET_USER_DATA, userData});
export const authUserData = (idUser) => ({type: AUTH_USER_DATA, idUser});
export const updateLoginText = (login) => ({type: UPDATE_LOGIN_TEXT, login});
export const updateEmailText = (email) => ({type: UPDATE_EMAIL_TEXT, email});
export const updatePasswordText = (password) => ({type: UPDATE_PASSWORD_TEXT, password});
export const setJWT = (jwt) => ({type: SET_JWT, jwt});
export const setErrorAuth = (err) => ({type: SET_ERROR_AUTH, err});

export const getUserLoginThunk = (login, email, password) => (dispatch) => {

    UserAPI.getLoginUser(login, email, password)
        .then(data => {
            dispatch(setJWT(data.jwt));
            dispatch(authUserData(data.id));
            dispatch(setErrorAuth(false));})
        .catch(e => {
            dispatch(setErrorAuth(true))});

}
export default authReducer;