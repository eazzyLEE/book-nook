import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../utils/api';
import {Book, RejectError} from '../types';

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
    return data;
  } catch (error: any) {
    return rejectWithValue({message: ''});
  }
});
