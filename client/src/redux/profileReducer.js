import {UserAPI} from "../api/api";
import {setBaseURL} from "./userReducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE_DATA = "SET_USER_PROFILE_DATA";
const SET_USER_STATUS = "SET_USER_STATUS";

let initReducer = {
    posts: [
        {
            id: 1,
            text: "5Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?",
            imgUrl: "https://ggscore.com/media/logo/t25596.png?64",
            likesCounter: "5",
            dislikesCounter: "232"
        },
        {
            id: 2,
            text: "4Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?",
            imgUrl: "https://ggscore.com/media/logo/t25596.png?64",
            likesCounter: "523",
            dislikesCounter: "10"
        },
    ],
    newPostText: "",
    profile:{
        baseURL:'',
        contacts: {},
        currentUserProfile: '',
        email: '',
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        name: '',
        photos: {},
        status: '',
        userId: ''
    }
};


const profileReducer = (state = initReducer, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                text: state.newPostText,
                imgUrl: "",
                likesCounter: "3",
                dislikesCounter: "5",
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;}

        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state};
            stateCopy.newPostText = action.newMessage;
            return stateCopy;}

        case SET_USER_PROFILE_DATA: return {...state, profile:action.usersData}

        case SET_USER_STATUS: {
            let copyState = {...state};
            copyState.profile.status = action.status;
            return copyState;}

        default:
            return state;
    }
}


export const addPostAC = () => ({type: ADD_POST});
export const updatePostAC = (textMessage) => ({type: UPDATE_NEW_POST_TEXT, newMessage: textMessage});
export const setUserProfile = (usersData) => ({type: SET_USER_PROFILE_DATA, usersData});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});


export const setUserStatusThunk = (userID, status) => (dispatch) => {
    UserAPI.setUserStatus(userID, status)
    dispatch(setUserStatus(status));
}

export const getUserProfileThunk = (userID, jwt) => (dispatch) => {

    UserAPI.getUserProfile(userID, jwt)
        .then(data => {
            dispatch(setUserProfile({...data, currentUserProfile:userID}));
            dispatch(setBaseURL(data.baseURL));
        })
}

export default profileReducer;