import {combineReducer} from 'redux';
import {ProductReducer} from './productReducer';

const reducers=combineReducer({
    allProducts:ProductReducer,
})