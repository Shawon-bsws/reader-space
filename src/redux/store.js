import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slice/products_slice';
import cartReducer from '../slice/cart_slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
