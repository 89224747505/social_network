const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
        {
            id: 3,
            text: "3Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?",
            imgUrl: "https://ggscore.com/media/logo/t25596.png?64",
            likesCounter: "125",
            dislikesCounter: "130"
        },
        {
            id: 4,
            text: "+++Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Quidem, optio? Quaerat, commodi rerum, iure earum asperiores totam corrupti aliquam hic tempora illo. Quam, earum eum ratione optio. Enim, numquam hic?",
            imgUrl: "https://ggscore.com/media/logo/t25596.png?64",
            likesCounter: "125",
            dislikesCounter: "130"
        },
    ],
    newPostText: "",
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
        default:
            return state;
    }
}


export const addPostAC = () => ({type: ADD_POST}); // Создает объект для Диспатча, для управления рендером
export const updatePostAC = (textMessage) => ({type: UPDATE_NEW_POST_TEXT, newMessage: textMessage}); // Создает объект для Диспатча, для управления рендером
export default profileReducer;