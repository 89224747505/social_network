import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";


export let rerenderEntireTree = (state, addPost, newPostTextChange) => {
    ReactDOM.render(<App state={state} addPost={addPost} newPostTextChange={newPostTextChange}/>, document.getElementById('root'));
};

