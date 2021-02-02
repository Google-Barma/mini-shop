// import { createSelector } from '@reduxjs/toolkit';

export const getProducts = state => state.products;

export const getOrders = state => state.orderList.orders;

export const getIsOpen = state => state.orderList.isOpen;
