import {UserAPI} from "../api/api";
import {FollowType, InitialState,SetBaseUrlType, SetBlockAfterType, SetBlockBeforeType, SetCurrentPageType,
    SetTotalCountType, SetUsersType, ToggleIsFetchingType, ToggleIsFollowingType, UnfollowType, UserType} from "./types/userReducerTypes";

export const FOLLOW = "FOLLOW";
export const UNFOLLOW = "UNFOLLOW";
export const SET_USERS = "SET-USERS";
export const SET_BLOCK_BEFORE = "SET_BLOCK_BEFORE";
export const SET_BLOCK_AFTER = "SET_BLOCK_AFTER";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
export const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";
export const SET_BASE_URL = 'SET_BASE_URL';

let initState:InitialState = {
    users:[],
    totalUsersCount:0,
    pageSize:3,
    currentPage:1,
    currentTwentyBlock:0,
    isFetching:true,
    followingInProgress: false,
    followingUser: null,
    baseURL:'',
};


const userReducer = (state = initState, action):InitialState => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(user => {
                        if (action.payload === user.id) {
                            return {...user, followed: true}
                        }
                        return user;
                    }
                )
            };
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(user => {
                        if (action.payload === user.id) {
                            return {...user, followed: false}
                        }
                        return user;
                    }
                )
            };

        case SET_BLOCK_AFTER:
            let pagesCount = Math.ceil(state.totalUsersCount / state.pageSize);
            return {
                ...state,
                currentTwentyBlock:(state.currentTwentyBlock+20 > pagesCount) ? state.currentTwentyBlock : state.currentTwentyBlock+20,
                currentPage: (state.currentTwentyBlock+20 > pagesCount) ? state.currentPage: state.currentTwentyBlock+21,
            };

        case SET_BLOCK_BEFORE:
            return {
                ...state,
                currentTwentyBlock:(state.currentTwentyBlock === 0) ? state.currentTwentyBlock : state.currentTwentyBlock-20,
                currentPage: (state.currentTwentyBlock === 0) ? 1 : state.currentTwentyBlock,
            };

        case SET_USERS: return {...state, users:[ ...action.payload]};

        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.payload};


        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload};

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state, followingInProgress: action.payload.stateFollowingProgress, followingUser: action.payload.userID};

        case SET_BASE_URL:
            return {...state, baseURL: action.payload};

        default:
            return state;
    }
}

export const follow = (userID:number):FollowType => ({type: FOLLOW, payload:userID});
export const unfollow = (userID:number):UnfollowType => ({type: UNFOLLOW, payload:userID});
export const setUsers = (users:Array<UserType>):SetUsersType => ({type: SET_USERS, payload:users});
export const setTotalCount = (totalCount:number):SetTotalCountType => ({type: SET_TOTAL_COUNT, payload:totalCount});
export const setBlockBefore = ():SetBlockBeforeType => ({type: SET_BLOCK_BEFORE});
export const setBlockAfter = ():SetBlockAfterType => ({type: SET_BLOCK_AFTER});
export const setCurrentPage = (current:number):SetCurrentPageType => ({type: SET_CURRENT_PAGE, payload:current});
export const setIsFetching = (stateIsFetching:boolean):ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, payload:stateIsFetching});
export const setFollowingInProgress = (stateFollowingProgress:boolean,userID:number):ToggleIsFollowingType =>
                                    ({type:TOGGLE_IS_FOLLOWING_PROGRESS, payload:{stateFollowingProgress, userID}});
export const setBaseURL = (baseURL:string):SetBaseUrlType => ({type:SET_BASE_URL, payload:baseURL});



export const getUsersThunk = (currentPage, pageSize, jwt) => (dispatch) => {

    dispatch(setIsFetching(true));

    UserAPI.getUsers(currentPage, pageSize, jwt).then(data => {

        dispatch(setTotalCount(data.totalCount));
        dispatch(setBaseURL(data.baseURL));
        dispatch(setUsers(data.items));
        dispatch(setIsFetching(false));
    })
}

export const setUserFollowThunk = (userId, type, jwt) => (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));

    if (type === "UNFOLLOW") {
    UserAPI.setUserUnFollow(userId, jwt)
        .then(data => {
            dispatch(setFollowingInProgress(false, userId));
            dispatch(unfollow(userId));
        })}

    if (type === "FOLLOW") {
    UserAPI.setUserFollow(userId, jwt)
        .then(data => {
            dispatch(setFollowingInProgress(false, userId));
            dispatch(follow(userId));
        })}
}

export default userReducer;