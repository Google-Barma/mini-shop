import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  loadMore,
  addOrder,
  deleteOrder,
  isOpenOrder,
  clearOrderList,
} from './product-action';
import createProducts from '../../service/createItems';

const initialState = createProducts();

const productReducer = createReducer(initialState, {
  [loadMore]: (state, { payload }) => [...state, ...payload],
});

const orderReducer = createReducer([], {
  [addOrder]: (state, { payload }) => [...state, payload],
  [deleteOrder]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
  [clearOrderList]: (_, action) => [],
});

const isOpenReducer = createReducer(false, {
  [isOpenOrder]: (_, { payload }) => payload,
});

export default combineReducers({
  products: productReducer,
  orderList: combineReducers({
    orders: orderReducer,
    isOpen: isOpenReducer,
  }),
});
