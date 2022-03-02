import { createSlice } from '@reduxjs/toolkit';
import data from '../utils/books.json';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productsList: [],
    featured_products: [],
    single_product: {},
  },
  reducers: {
    fetchData: (state) => {
      state.productsList = data;
    },
    fetchSingleProduct: (state, action) => {
      let product = null;
      if (state.productsList.length > 0) {
        product = state.productsList.filter((item) => {
          return item.id === action.payload;
        });
      } else {
        state.productsList = data;
        product = state.productsList.filter((item) => {
          return item.id === action.payload;
        });
      }
      state.single_product = { ...product[0] };
    },
  },
});

export const { fetchData, fetchSingleProduct } = productsSlice.actions;
export default productsSlice.reducer;
