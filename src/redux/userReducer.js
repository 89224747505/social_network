const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initReducer = {
    users:[],
    totalUsersCount:5601,
    pageSize:100,
    currentPage:41,
    currentTwentyBlock:40,
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
        case SET_USERS: return {...state, users:[...state.users, ...action.users]};
        default:
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID});
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export default userReducer;