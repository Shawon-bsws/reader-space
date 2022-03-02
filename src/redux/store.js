import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slice/products_slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
