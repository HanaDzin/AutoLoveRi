import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal' };



const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // The item to add to the cart
      const item = action.payload;

      // ako je vec u kosarici
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        // povecati kolicinu
        state.cartItems = state.cartItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        //ako ne, dodaj novo vozilo u kosaricu
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);  
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x._id !== action.payload);

      return updateCart(state);
     },
     saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
     },
     savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
     },
     clearCartItems: (state, action) => {
      state.cartItems = [];
      return updateCart(state);
     }
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  saveShippingAddress, 
  savePaymentMethod,
  clearCartItems } = cartSlice.actions;

export default cartSlice.reducer;