// import { createSelector } from '@reduxjs/toolkit';

import { createSelector } from '@reduxjs/toolkit';

export const getProducts = state => state.products;

export const getOrders = state => state.orderList.orders;

export const getIsOpen = state => state.orderList.isOpen;

export const getTotalAmount = createSelector([getOrders], orders =>
  orders.reduce((total, order) => total + order.amount, 0),
);

export const getTotalPrice = createSelector([getOrders], orders =>
  orders.reduce(
    (total, order) => total + order.amount * (Number(order.smth) + order.price),
    0,
  ),
);
