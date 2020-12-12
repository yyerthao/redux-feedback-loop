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
    if (action.type === 'GET_FEEDBACK') {
        return action.payload;
    } else if (action.type === 'UNDERSTANDING') {
        return action.payload;
    } else if (action.type === 'SUPPORT') {
        return action.payload;
    } else if (action.type === 'COMMENTS'){
        return action.payload;
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
