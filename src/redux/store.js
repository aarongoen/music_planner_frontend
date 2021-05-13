import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import pieceReducer from './reducers/pieceReducer';
import thunk from 'redux-thunk';
import dayReducer from './reducers/dayReducer';

const rootReducer = combineReducers({
    pieces: pieceReducer,
    days: dayReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;