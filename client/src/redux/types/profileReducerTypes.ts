import {ADD_POST, SET_USER_PROFILE_DATA, SET_USER_STATUS, UPDATE_NEW_POST_TEXT} from "../profileReducer";

export type PostItemType = {
    id: number | null;
    text: string | null;
    imgUrl: string | null
    likesCounter: number | null;
    dislikesCounter: number | null;
}
export type ContactsType = {
    github: string | null;
    vk: string | null;
    facebook: string | null;
    Instagram: string | null;
    twitter: string | null;
    website: string | null;
    youtube: string | null;
    mainLink: string | null;
}

export type PhotosType = {
    small: string | null;
    large: string | null;
}
export type ProfileType = {
    baseURL: string | null;
    contacts: ContactsType;
    currentUserProfile: string | null;
    email: string | null;
    fullName: string | null;
    lookingForAJob: boolean;
    lookingForAJobDescription: string | null;
    name: string | null;
    photos: PhotosType;
    status: string | null;
    userId: number | null;
}
export type InitialStateType = {
    posts: Array<PostItemType>;
    newPostText: string | null;
    profile: ProfileType;
}

export type AddPostType = {
    type: typeof ADD_POST;
}

export type UpdateNewPostType = {
    type:typeof UPDATE_NEW_POST_TEXT;
    payload: string;
}

export type SetUserProfileType = {
    type: typeof SET_USER_PROFILE_DATA;
    payload: ProfileType;
}

export type SetUserStatusType = {
    type: typeof SET_USER_STATUS;
    payload: string;
}