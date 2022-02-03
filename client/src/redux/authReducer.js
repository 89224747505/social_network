const SET_USER_DATA = "SET_USER_DATA";

let initReducer = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,

};

const authReducer = (state = initReducer, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return  {
                ...state,
                ...action.userData,
                isAuth: true,
            };

        default:
            return state;
    }
}

export const setAuthUserData = (userData) => ({type: SET_USER_DATA, userData});

export default authReducer;