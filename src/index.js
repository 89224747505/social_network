import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";
import "./index.css"

window.store = store;

let rerenderEntireTree = () => {
    ReactDOM.render(<App state={store.getState} addPost={store.addPost.bind(store)} addMessage={store.addMessage.bind(store)} newPostTextChange={store.newPostTextChange.bind(store)}
                         newMessageTextChange={store.newMessageTextChange.bind(store)}/>, document.getElementById('root'));
};

rerenderEntireTree(); //Отрисовывает первый раз rerenderEntireTree

store.subscribe(rerenderEntireTree);  // Делает колбэк через функцию subscribe передает функцию, как объект rerenderEntireTree в state.js,
                                // где в дальнейшем она присваивается локальной модульной переменной rerenderEntireTree

