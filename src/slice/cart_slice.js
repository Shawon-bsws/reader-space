import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT } from '../actions';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: getLocalStorage(),
    total: 0,
    amount: 0,
    shipping: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = { ...action.payload.product, amount: action.payload.amount };
      state.cart.push(item);
    },
    toggleAmount: (state, action) => {
      if (action.payload.type === INCREMENT) {
        state.cart = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          return cartItem;
        });
      } else if (action.payload.type === DECREMENT) {
        state.cart = state.cart
          .map((cartItem) => {
            if (cartItem.id === action.payload.id) {
              return { ...cartItem, amount: cartItem.amount - 1 };
            }
            return cartItem;
          })
          .filter((cartItem) => cartItem.amount !== 0);
      }
    },
    remove: (state, action) => {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
    getTotal: (state) => {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.amount += amount;
          cartTotal.total += itemTotal;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      let ship = (total / amount) * (0.25 * (amount / 2));

      state.amount = amount;
      state.total = total;
      state.shipping = parseFloat(ship.toFixed(2));
    },
  },
});

export const { addToCart, toggleAmount, remove, clearCart, getTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
