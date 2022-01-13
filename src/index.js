import React from 'react';
import './index.css';
import {rerenderEntireTree} from "./render";
import state, {addPost, newPostTextChange} from "./redux/state";

rerenderEntireTree(state, addPost, newPostTextChange);