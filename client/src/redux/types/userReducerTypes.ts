import {PhotosType} from "./profileReducerTypes";
import {
    FOLLOW, SET_BASE_URL,
    SET_BLOCK_AFTER,
    SET_BLOCK_BEFORE,
    SET_CURRENT_PAGE,
    SET_TOTAL_COUNT,
    SET_USERS, TOGGLE_IS_FETCHING, TOGGLE_IS_FOLLOWING_PROGRESS,
    UNFOLLOW
} from "../userReducer";

export type UserType = {
    name: string | null;
    id: number;
    photos: PhotosType;
    status: string | null;
    followed: boolean;
}

export type InitialState = {
    users:Array<UserType>;
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    currentTwentyBlock: number;
    isFetching: boolean;
    followingInProgress: boolean;
    followingUser: number | null;
    baseURL: string;
}

export type FollowType = {
    type:typeof FOLLOW;
    payload: number;
}

export type UnfollowType = {
    type: typeof UNFOLLOW;
    payload: number;
}

export type SetUsersType = {
    type: typeof SET_USERS;
    payload: Array<UserType>;
}

export type SetTotalCountType = {
    type:typeof SET_TOTAL_COUNT;
    payload:number;
}

export type SetBlockBeforeType = {
    type:typeof SET_BLOCK_BEFORE;
}

export type SetBlockAfterType = {
    type:typeof SET_BLOCK_AFTER;
}

export type SetCurrentPageType = {
    type:typeof SET_CURRENT_PAGE;
    payload: number;
}

export type ToggleIsFetchingType = {
    type:typeof TOGGLE_IS_FETCHING;
    payload: boolean;
}

export type ToggleIsFollowingType = {
    type:typeof TOGGLE_IS_FOLLOWING_PROGRESS;
    payload:{stateFollowingProgress:boolean;
        userID:number}
}

export type SetBaseUrlType = {
    type:typeof SET_BASE_URL;
    payload:string;
}