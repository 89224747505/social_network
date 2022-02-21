import {PhotosType} from "./profileReducerTypes";
import {FOLLOW, UNFOLLOW} from "../userReducer";

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