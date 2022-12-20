import React from 'react';
import ReactDOM from'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { createRoot } from 'react-dom/client';

import reducers from './reducers';

import App from './App';
 const store = createStore(reducers, compose(applyMiddleware(thunk)));
// const store = configureStore());

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
