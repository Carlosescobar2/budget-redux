import {createStore, applyMiddleWare, combineReducers} from 'redux'

import promiseMiddleWare from 'redux-promise-middleware'

import budgetReducer from './budgetReducer'

import userReducer from './userReducer'

const rootReducer = combineReducers ({
    budget: budgetReducer,
    user: userReducer
})

export default createStore(rootReducer, applyMiddleWare(promiseMiddleWare));

