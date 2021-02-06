import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  loadMore,
  addOrder,
  addExtendedOrder,
  deleteOrder,
  isOpenOrder,
  clearOrderList,
} from './product-action';
import createProducts from '../../service/createItems';

const initialState = createProducts();

//убрать из reducer'a
const productReducer = createReducer(initialState, {
  [loadMore]: (_, { payload }) => createProducts(payload),
});

const orderReducer = createReducer([], {
  [addOrder]: (state, { payload }) => {
    if (state.length === 0) return [payload];

    const existInState = state.find(item => item.id === payload.id);

    if (existInState) {
      return state.map(order => {
        if (order.id === payload.id)
          return { ...order, amount: order.amount + payload.amount };
        return order;
      });
    }

    return [...state, payload];
  },

  [addExtendedOrder]: (state, { payload }) => {
    if (state.length === 0) return [payload];

    const existInState = state.find(
      item => item.id === payload.id && item.smth === payload.smth,
    );

    if (existInState) {
      return state.map(order => {
        if (order.id === payload.id)
          return { ...order, amount: order.amount + payload.amount };
        return order;
      });
    }

    return [...state, payload];
  },

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
