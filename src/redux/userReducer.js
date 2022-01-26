const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_BLOCK_BEFORE = "SET_BLOCK_BEFORE";
const SET_BLOCK_AFTER = "SET_BLOCK_AFTER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

let initReducer = {
    users:[],
    totalUsersCount:0,
    pageSize:100,
    currentPage:1,
    currentTwentyBlock:0,
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
                currentPage: (state.currentTwentyBlock === 0) ? 20 : state.currentTwentyBlock,
            };

        case SET_USERS: return {...state, users:[ ...action.users]};

        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount};


        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.current};

        default:
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setBlockBeforeAC = () => ({type: SET_BLOCK_BEFORE});
export const setBlockAfterAC = () => ({type: SET_BLOCK_AFTER});
export const setCurrentPageAC = (current) => ({type: SET_CURRENT_PAGE, current});
export default userReducer;