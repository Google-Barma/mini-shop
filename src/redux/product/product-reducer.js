import { combineReducers, createReducer } from '@reduxjs/toolkit';

import { addProduct, deleteProduct } from './contacts-actions';

const productReducer = createReducer([], {
  [addProduct]: (state, { payload }) => [...state, payload],
  [deleteProduct]: (state, { payload }) =>
    state.filter(contact => {
      return contact.id !== payload;
    }),
});

export default combineReducers({
  contacts: productReducer,
});
