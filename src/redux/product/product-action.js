import { createAction } from '@reduxjs/toolkit';

export const loadMore = createAction('product/loadMore');

export const addOrder = createAction('product/addOrder');

export const deleteOrder = createAction('product/deleteOrder');

export const isOpenOrder = createAction('orderList/isOpen');
