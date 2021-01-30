import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './product/product-reducer';

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
