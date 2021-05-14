import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index.js"
import { Provider } from "react-redux";

const { worker } = require('./mocks/browser');
worker.start();

const store = createStore(reducer, applyMiddleware(logger, thunk)); ///STORE///
console.log(store.getState());

const rootElement = document.getElementById("root");

ReactDOM.render(
   <Provider store={store}> <App /> </Provider>, 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.