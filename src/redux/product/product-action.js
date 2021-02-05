import { createAction } from '@reduxjs/toolkit';

export const loadMore = createAction('product/loadMore');

export const addOrder = createAction('product/addOrder');

export const addExtendedOrder = createAction('order/addExtendedOrder');

export const deleteOrder = createAction('order/deleteOrder');

export const isOpenOrder = createAction('orderList/isOpen');

export const clearOrderList = createAction('orderList/clearOrder');
