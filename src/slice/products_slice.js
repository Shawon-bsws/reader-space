import { createSlice } from '@reduxjs/toolkit';
import data from '../utils/books.json';

//randomly selects multiple elements from array without repetition
// eslint-disable-next-line no-extend-native
Array.prototype.sample = function (sampleSize) {
  if (0 < sampleSize && sampleSize < this.length) {
    let i = 0;
    let elements = [];
    while (i < sampleSize) {
      let index = this[Math.floor(Math.random() * this.length)];
      if (elements.length > 0) {
        while (elements.includes(index)) {
          index = this[Math.floor(Math.random() * this.length)];
        }
        elements.push(index);
      } else {
        elements.push(index);
      }
      i++;
    }
    return elements;
  } else {
    console.log('please put a valid sample size');
  }
};

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
    getFeaturedProducts: (state) => {
      state.featured_products = state.productsList.sample(3);
    },
  },
});

export const { fetchData, fetchSingleProduct, getFeaturedProducts } =
  productsSlice.actions;
export default productsSlice.reducer;
