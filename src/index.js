import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import "./index.css"
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
           <App store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(); //Отрисовывает первый раз rerenderEntireTree

store.subscribe(rerenderEntireTree);  // Делает колбэк через функцию subscribe передает функцию, как объект rerenderEntireTree в store.js,
// где в дальнейшем она присваивается локальной модульной переменной rerenderEntireTree

