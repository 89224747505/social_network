import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";


export let rerenderEntireTree = (state, addPost, addMessage, newPostTextChange, newMessageTextChange) => {
    ReactDOM.render(<App state={state} addPost={addPost} addMessage={addMessage} newPostTextChange={newPostTextChange} newMessageTextChange={newMessageTextChange}/>, document.getElementById('root'));
};

