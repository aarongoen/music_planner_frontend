import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import pieceReducer from './reducers/pieceReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    piece: pieceReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;