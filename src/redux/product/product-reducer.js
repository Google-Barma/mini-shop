import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { loadMore, addToOrder, deleteOrder } from './product-action';
import createProducts from '../../service/createItems';

const initialState = createProducts();

const productReducer = createReducer(initialState, {
  [loadMore]: (state, { payload }) => [...state, payload],
});

const orderReducer = createReducer([], {
  [addToOrder]: (state, { payload }) => [...state, payload],
});

export default combineReducers({
  products: productReducer,
  orders: orderReducer,
});
