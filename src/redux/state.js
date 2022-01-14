let store = {
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
            newMessageText:"",},
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
            newPostText:"",
        }
    },
    getState() {
      return this._state;
    },
    rerenderEntireTree() {console.log("Hallo world")},
    addPost() {
        let newPost = {id: 5, text: this._state.profilePage.newPostText, imgUrl: "", likesCounter: "3", dislikesCounter: "5",};
        this._state.profilePage.posts.push(newPost);
        this.rerenderEntireTree();
        this._state.profilePage.newPostText="";
    },
    addMessage() {
        let newMessage = {id: 5, name:"Иван", imgpath:"https://ggscore.com/media/logo/t25596.png?64", text: this._state.messagePage.newMessageText};
        this._state.messagePage.messages.push(newMessage);
        debugger;
        this.rerenderEntireTree();
        this._state.messagePage.newMessageText="";
    },
    newMessageTextChange(changeMessage) {
        this._state.messagePage.newMessageText = changeMessage;
        debugger;
        this.rerenderEntireTree()
    },
    newPostTextChange(changeMessage) {
        this._state.profilePage.newPostText = changeMessage;
        this.rerenderEntireTree()
    },
    subscribe(observe) {
        this.rerenderEntireTree = observe;
    },
}

export default store;