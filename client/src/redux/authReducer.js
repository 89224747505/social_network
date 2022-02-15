import {UserAPI} from "../api/api";


const SET_USER_DATA = "SET_USER_DATA";
const AUTH_USER_DATA = "AUTH_USER_DATA";
const SET_JWT = "SET_JWT";
const SET_ERROR_AUTH = "SET_ERROR_AUTH";

let initReducer = {
    authMessage:'',
    idAuth: null,
    jwt: "",
    login: "",
    email: "",
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
            return {...state, password: "", isAuth: true, idAuth: action.idUser, login:action.login, email: action.email};

        case SET_JWT:
            return {...state, jwt:action.jwt};

        case SET_ERROR_AUTH:
            return {...state, errorAuth:action.err, authMessage: action.message, isAuth: !action.err};

        default:
            return state;
    }
}

export const setAuthUserData = (userData) => ({type: SET_USER_DATA, userData});
export const authUserData = (idUser, login, email) => ({type: AUTH_USER_DATA, idUser, login, email});
export const setJWT = (jwt) => ({type: SET_JWT, jwt});
export const setErrorAuth = (err, message) => ({type: SET_ERROR_AUTH, err, message});

export const getUserLoginThunk = (login, email, password) => (dispatch) => {

    UserAPI.getLoginUser(login, email, password)
        .then(data => {
            dispatch(setJWT(data.jwt));
            dispatch(authUserData(data.id, login, email));
            dispatch(setErrorAuth(false, ""));})
        .catch(e => {
            debugger;
            dispatch(setErrorAuth(true, e.response.data.message))});

}

export const userLogOutThunk = (jwt) => (dispatch) => {
    UserAPI.setUserLogOut(jwt)
        .then(data => {
            dispatch(authUserData("","",""));
            dispatch(setErrorAuth(true, ""));
            dispatch(setJWT(""));
        })
        .catch(e => {
            dispatch(setErrorAuth(true, e.response.data.message))
        });
}
export default authReducer;