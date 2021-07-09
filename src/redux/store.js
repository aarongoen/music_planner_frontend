import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import pieces from './reducers/pieceReducer';
import days from './reducers/dayReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    pieces,
    days
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;