import userReducer from './userReducer';
import CartReducer from './CartReducers'
import ProductReducer from './ProductReducer'
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    userReducer,CartReducer,ProductReducer
})
export default rootReducers;