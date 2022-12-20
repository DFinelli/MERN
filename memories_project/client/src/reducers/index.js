import { combineReducers } from "redux";

import posts from './posts';

// ROOT REDUCERS

// { posts: posts } ======= { posts }

export default combineReducers({ posts} );