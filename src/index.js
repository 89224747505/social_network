import React from 'react';
import './index.css';
import {rerenderEntireTree} from "./render";
import state, {addPost, addMessage, newPostTextChange, newMessageTextChange} from "./redux/state";

rerenderEntireTree(state, addPost, addMessage, newPostTextChange, newMessageTextChange);