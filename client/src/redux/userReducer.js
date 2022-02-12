import {UserAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_BLOCK_BEFORE = "SET_BLOCK_BEFORE";
const SET_BLOCK_AFTER = "SET_BLOCK_AFTER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";
const SET_BASE_URL = 'SET_BASE_URL';

let initReducer = {
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


const userReducer = (state = initReducer, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(user => {
                        if (action.userID === user.id) {
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
                        if (action.userID === user.id) {
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

        case SET_USERS: return {...state, users:[ ...action.users]};

        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount};


        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.current};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.stateIsFetching};

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state, followingInProgress: action.stateFollowingProgress, followingUser: action.userID};

        case SET_BASE_URL:
            return {...state, baseURL: action.baseURL};

        default:
            return state;
    }
}

export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setBlockBefore = () => ({type: SET_BLOCK_BEFORE});
export const setBlockAfter = () => ({type: SET_BLOCK_AFTER});
export const setCurrentPage = (current) => ({type: SET_CURRENT_PAGE, current});
export const setIsFetching = (stateIsFetching) => ({type: TOGGLE_IS_FETCHING, stateIsFetching});
export const setFollowingInProgress = (stateFollowingProgress,userID) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS, stateFollowingProgress, userID});
export const setBaseURL = (baseURL) => ({type:SET_BASE_URL, baseURL});

export const getUsersThunk = (currentPage, pageSize) => (dispatch) => {

    dispatch(setIsFetching(true));

    UserAPI.getUsers(currentPage, pageSize).then(data => {

        dispatch(setTotalCount(data.totalCount));
        dispatch(setBaseURL(data.baseURL));
        dispatch(setUsers(data.items));
        dispatch(setIsFetching(false));
    })
}

export const setUserFollowThunk = (userId, type) => (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));

    if (type === "UNFOLLOW") {
    UserAPI.setUserUnFollow(userId)
        .then(data => {
            if (data.resultCode == 0) {
            dispatch(setFollowingInProgress(false, userId));
            dispatch(unfollow(userId));
        }})}

    if (type === "FOLLOW") {
        UserAPI.setUserFollow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(setFollowingInProgress(false, userId));
                    dispatch(follow(userId));
                }})}
}

export default userReducer;