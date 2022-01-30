const SET_USER_DATA = "SET_USER_DATA";


let initReducer = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,

};


const authReducer = (state = initReducer, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.data
            };

        default:
            return state;
    }
}

export const setUserData = (userData) => ({type: SET_USER_DATA, userData});


export default authReducer;