import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../utils/api';
import {Book, RejectError} from '../types';

const amounts = ['900', '1500', '2000', '550'];
const imageIds = Array.from({length: 11}, (_, index) => index);

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

    const bookList = data.map(item => {
      const itemPrice = amounts[Math.floor(Math.random() * amounts.length)];
      const iamgeId = imageIds[Math.floor(Math.random() * imageIds.length)];
      return {...item, Price: itemPrice, ImageId: iamgeId};
    });
    return bookList;
  } catch (error: any) {
    return rejectWithValue({message: ''});
  }
});
