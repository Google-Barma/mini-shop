import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './product-reducer';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: rootReducer,

  devTools: process.env.NODE_ENV === 'development',
});

export default store;
