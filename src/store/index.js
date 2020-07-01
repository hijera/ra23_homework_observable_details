import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import listReducer from '../reducers/list';
import detailsReducer from "../reducers/details";
import {detailsRequestEpic, listRequestEpic} from "../epics";

const reducer = combineReducers({
    list : listReducer,
    details: detailsReducer
});



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
    detailsRequestEpic,
    listRequestEpic
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;