import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";


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
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.messagePage = messageReducer(this._state.messagePage,action);
        this._callSubscriber();
    },
};


export default store;