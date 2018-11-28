import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import { getPosts, authentication, feedbackReducer } from './_reducers';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
const rootReducer = combineReducers({
	getPosts,
	authentication,
	feedbackReducer,
})
const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
