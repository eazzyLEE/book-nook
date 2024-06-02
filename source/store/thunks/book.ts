import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../utils/api';
import {Book, RejectError} from '../types';

const amounts = ['900', '1500', '2000', '550'];

export const getBooks = createAsyncThunk<
  Book[],
  {reference?: string; page?: string} | undefined,
  {
    rejectValue: RejectError;
  }
>('books/get', async (_, {rejectWithValue}) => {
  try {
    const url = '/books';
    const {data}: {data: Book[]} = await api(url, 'get', undefined);
    const itemPrice = amounts[Math.floor(Math.random() * amounts.length)];
    const bookList = data.map(item => ({...item, price: itemPrice}));
    return bookList;
  } catch (error: any) {
    return rejectWithValue({message: ''});
  }
});
