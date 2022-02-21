import {UserAPI} from "../api/api";
import {setBaseURL} from "./userReducer.ts";
import {InitialStateType, AddPostType, UpdateNewPostType, ProfileType,
        SetUserProfileType, SetUserStatusType} from "./types/profileReducerTypes.ts"

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const SET_USER_PROFILE_DATA = "SET_USER_PROFILE_DATA";
export const SET_USER_STATUS = "SET_USER_STATUS";

let initState:InitialStateType = {
    posts: [
        {
            id: 1,
            text: "5Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?",
            imgUrl: "https://ggscore.com/media/logo/t25596.png?64",
            likesCounter: 5,
            dislikesCounter: 232,
        },
        {
            id: 2,
            text: "4Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?",
            imgUrl: "https://ggscore.com/media/logo/t25596.png?64",
            likesCounter: 523,
            dislikesCounter: 10
        },
    ],
    newPostText: "",
    profile:{
        baseURL:'',
        contacts: {
            github:null,
            vk:null,
            Instagram:null,
            facebook:null,
            mainLink:null,
            twitter:null,
            website:null,
            youtube:null
        },
        currentUserProfile: '',
        email: '',
        fullName: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        name: '',
        photos: {
            small: null,
            large: null
        },
        status: '',
        userId: null,
    }
};


const profileReducer = (state = initState, action:any):InitialStateType => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5,
                text: state.newPostText,
                imgUrl: "",
                likesCounter: 3,
                dislikesCounter: 5,
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;}

        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state};
            stateCopy.newPostText = action.payload;
            return stateCopy;}

        case SET_USER_PROFILE_DATA: return {...state, profile:action.payload}

        case SET_USER_STATUS: {
            let copyState = {...state};
            copyState.profile.status = action.payload;
            return copyState;}

        default:
            return state;
    }
}

export const addPost = ():AddPostType => ({type: ADD_POST});
export const updatePost = (textMessage:string):UpdateNewPostType => ({type: UPDATE_NEW_POST_TEXT, payload: textMessage});
const setUserProfile = (usersData:ProfileType):SetUserProfileType => ({type: SET_USER_PROFILE_DATA, payload:usersData});
export const setUserStatus = (status:string):SetUserStatusType => ({type: SET_USER_STATUS, payload:status});


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