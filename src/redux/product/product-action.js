import { createAction } from '@reduxjs/toolkit';

export const loadMore = createAction('product/loadMore');

export const addToOrder = createAction('product/addToOrder');

export const deleteOrder = createAction('product/deleteToOrder');
