import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { loadMore, addToOrder, deleteOrder } from './product-action';
import createProducts from '../../service/createItems';

const initialState = createProducts();

const productReducer = createReducer(initialState, {
  [loadMore]: (state, { payload }) => [...state, ...payload],

  // [deleteProduct]: (state, { payload }) =>
  //   state.filter(contact => {
  //     return contact.id !== payload;
  //   }),
});
const orderReducer = createReducer([], {
  [addToOrder]: (state, { payload }) => [...state, payload],
  [deleteOrder]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

export default combineReducers({
  products: productReducer,
  orders: orderReducer,
});
