import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { loadMore, addOrder, deleteOrder } from './product-action';
import createProducts from '../../service/createItems';

const initialState = createProducts();

const productReducer = createReducer(initialState, {
  [loadMore]: (state, { payload }) => [...state, payload],
});

const orderReducer = createReducer([], {
  [addOrder]: (state, { payload }) => [...state, payload],
  [deleteOrder]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

export default combineReducers({
  products: productReducer,
  orders: orderReducer,
});
