import {createSlice} from '@reduxjs/toolkit';
import {Book, BookState} from '../types';
import {getBooks} from '../thunks/book';

const initialState = {
  loading: false,
  message: '',
  books: [],
  cart: [],
  currentPage: 1,
  error: '',
} as BookState;

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addToCart: (state, {payload}: {payload: Book}) => {
      const cartItemPosition = state.cart.findIndex(
        item => item.id === payload.id,
      );
      if (cartItemPosition > -1) {
        state.cart[cartItemPosition].quantity =
          state.cart[cartItemPosition].quantity + 1;
      } else {
        state.cart.push({...payload, quantity: 1});
      }
    },
    removeFromCartByQuantity: (state, {payload}: {payload: Book}) => {
      const cartItemPosition = state.cart.findIndex(
        book => book.id === payload.id,
      );
      if (cartItemPosition > -1) {
        const cartItem = state.cart[cartItemPosition];
        if (cartItem.quantity > 1) {
          state.cart[cartItemPosition].quantity =
            state.cart[cartItemPosition].quantity - 1;
        } else {
          state.cart.splice(cartItemPosition, 1);
        }
      }
    },
    removeFromCart: (state, {payload}: {payload: Book}) => {
      const cartItemPosition = state.cart.findIndex(
        book => book.id === payload.id,
      );
      if (cartItemPosition > -1) {
        state.cart.splice(cartItemPosition, 1);
      }
    },
    resetLoader: state => ({
      ...state,
      loading: false,
      message: '',
    }),
  },
  extraReducers: builder => {
    builder.addCase(getBooks.pending, state => {
      state.loading = true;
      state.message = '';
      state.error = '';
    });
    builder.addCase(getBooks.fulfilled, (state, {payload}: any) => {
      state.message = 'Books retrieved';
      state.books = payload;
      state.loading = false;
    });
  },
});
export const {
  addToCart,
  removeFromCart,
  removeFromCartByQuantity,
  resetLoader,
} = bookSlice.actions;

export default bookSlice.reducer;
