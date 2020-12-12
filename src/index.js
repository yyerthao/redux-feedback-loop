import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// Redux 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';



// reducer to run everytime an action is dispatched
const feedbackReducer = (state = [], action) => {
    if (action.type === 'FEELINGS') {
    // mutating state directionl, must return a new object containing state
    // and any new property want to add
        return [...state, action.payload];
    } else if (action.type === 'UNDERSTANDING') {
        return [...state, action.payload];
    } else if (action.type === 'SUPPORT') {
        return [...state, action.payload];
    } else if (action.type === 'COMMENTS'){
        return [...state, action.payload];
    } else if (action.type === 'NEW_FEEDBACK') {
        return [];
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger),
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
