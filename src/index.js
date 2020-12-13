import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// Redux 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';



// ORIGINAL reducer with multiple conditions
// const feedbackReducer = (state = {}, action) => {
//     if (action.type === 'ADD_FEELINGS') {
// // mutating state directional, must return a new object containing state
// // and any new property want to add
//         return [...state,action.payload];
//     } else if (action.type === 'UNDERSTANDING') {
//         return [...state,action.payload];
//     } else if (action.type === 'SUPPORT') {
//         return [...state,action.payload];
//     } else if (action.type === 'COMMENTS'){
//         return [...state,action.payload];
//     } else if (action.type === 'NEW_FEEDBACK') {
//         return {};
//     }
//     return state;
// }


const feelingsReducer = (state = [], action) => {
    if(action.type === 'FEELINGS') {
        return action.payload;
    } else if (action.type === 'NEW_FEEDBACK'){
        return [];
    }
    return state;
}

const understandReducer = (state = [], action) => {
    if(action.type === 'UNDERSTANDING') {
        return action.payload;
    } else if (action.type === 'NEW_FEEDBACK'){
        return [];
    }
    return state;
}

const supportReducer = (state = [], action) => {
    if(action.type === 'SUPPORT') {
        return action.payload;
    } else if (action.type === 'NEW_FEEDBACK'){
        return [];
    }
    return state;
}

const commentsReducer = (state = [], action) => {
    if(action.type === 'COMMENTS') {
        return action.payload;
    } else if (action.type === 'NEW_FEEDBACK'){
        return [];
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        feelingsReducer,
        understandReducer,
        supportReducer,
        commentsReducer,
    }),
    applyMiddleware(logger),
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
