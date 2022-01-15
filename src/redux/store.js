const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";


let store = {
//Данные проекта
    _state: {
        dialogPage: [
            {id: 1, name: 'Иван'},
            {id: 2, name: 'Иннокентий'},
            {id: 3, name: 'Петр'},
            {id: 4, name: 'Афонасий'},
        ],
        messagePage: {
            messages: [
                {
                    id: 1,
                    name: "Иван1",
                    imgpath: "https://ggscore.com/media/logo/t25596.png?64",
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                },
                {
                    id: 2,
                    name: "Иван2",
                    imgpath: "https://ggscore.com/media/logo/t25596.png?64",
                    text: "doloribus iste, fugit, quam sed obcaecati aliquid officia, quod fuga, est nemo deleniti dolorem"
                },
                {
                    id: 3,
                    name: "Иван3",
                    imgpath: "https://ggscore.com/media/logo/t25596.png?64",
                    text: "tempore sequi, dicta doloremque ducimus quidem porro saepe animi voluptas nesciunt libero ipsam"
                },
                {
                    id: 4,
                    name: "Иван4",
                    imgpath: "https://ggscore.com/media/logo/t25596.png?64",
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                },
                {
                    id: 5,
                    name: "Иван5",
                    imgpath: "https://ggscore.com/media/logo/t25596.png?64",
                    text: "11111Lorem sdfgsdfgsdfgipsum dolor sit amet consectetur, adipisicing elit."
                },
            ],
            newMessageText: "",
        },
        profilePage: {
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
        }
    },
//Внутренний метод для ререндера App
    _callSubscriber() {
    },
//Метод получения данных из State
    getState() {
        return this._state;
    },
//Метод для получения колбека для ререндера App
    subscribe(observe) {
        this._callSubscriber = observe;
    },
//Метод ДИСПЕТЧЕР для
    dispatch(action) {
        if (action.type === 'ADD-POST') {  //Метод добавления поста в Profile
            let newPost = {
                id: 5,
                text: this._state.profilePage.newPostText,
                imgUrl: "",
                likesCounter: "3",
                dislikesCounter: "5",
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber();
        } else if (action.type === 'ADD-MESSAGE') {  //Метод добавления  сообщения на странице Message
            let newMessage = {
                id: 5,
                name: "Иван",
                imgpath: "https://ggscore.com/media/logo/t25596.png?64",
                text: this._state.messagePage.newMessageText
            };
            this._state.messagePage.messages.push(newMessage);
            this._state.messagePage.newMessageText = "";
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') { //Метод контролирующий изменения в TextArea на странице Message
            debugger;
            this._state.messagePage.newMessageText = action.newMessage;
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') { //Метод контролирующий изменения в TextArea на странице Profile
            this._state.profilePage.newPostText = action.newMessage;
            this._callSubscriber()
        }

    },
};

export const addPostCreator = () => ({type: ADD_POST}); // Создает объект для Диспатча, для управления рендером
export const updateNewPostCreator = (textMessage) => ({type: UPDATE_NEW_POST_TEXT, newMessage: textMessage}); // Создает объект для Диспатча, для управления рендером
export const addMessageCreator = () => ({type: ADD_MESSAGE}); // Создает объект для Диспатча, для управления рендером
export const updateNewMessageCreator = (textMessage) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: textMessage}); // Создает объект для Диспатча, для управления рендером


export default store;