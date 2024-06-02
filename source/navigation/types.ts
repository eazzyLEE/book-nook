import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Book} from '@store/types';

export type StackParamList = {
  home: undefined;
  book_list: undefined;
  book_detail: {book: Book};
  cart: undefined;
};

export type BookListProps = NativeStackScreenProps<StackParamList, 'book_list'>;
export type BookDetailProps = NativeStackScreenProps<
  StackParamList,
  'book_detail'
>;
