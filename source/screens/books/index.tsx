/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {TextInput, View} from 'react-native';
import {
  BookListFade,
  CartIcon,
  Gray,
  List,
  Text,
  filterArrayByText,
} from '@components';
import {Search} from '@assets/svgs';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {getBooks} from '@store/thunks/book';
import {BookCard} from '@components';
import {Book} from '@store/types';
import {BookListProps} from '../../navigation/types';
import {addToCart, removeFromCart} from '@store/slices/book';

const BookList = ({navigation}: BookListProps) => {
  const dispatch = useAppDispatch();
  const {books, cart, loading} = useAppSelector(state => state.books);

  const [bookList, setBookList] = useState(books);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  useEffect(() => {
    if (searchText.length) {
      const results = filterArrayByText(books, searchText);
      setBookList(results as Book[]);
    } else {
      setBookList(books);
    }
  }, [searchText, books]);

  const idsInCart = cart.map(item => item.id);

  const cartCount = cart.reduce((a, b) => a + b.quantity, 0);
  const handleCartItem = (book: Book) => {
    const itemIsInCart = idsInCart.includes(book.id);
    if (itemIsInCart) {
      dispatch(removeFromCart(book));
    } else {
      dispatch(addToCart(book));
    }
  };

  const goToBookDetail = (book: Book) =>
    navigation.navigate('book_detail', {book});

  return (
    <View style={styles.background}>
      <View style={styles.headerPane}>
        <Text title="Explore Store" type="h1" />
        <CartIcon cartCount={cartCount} />
      </View>

      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search for books, authors"
          value={searchText}
          onChangeText={(value: string) => setSearchText(value)}
          style={styles.searchInput}
          placeholderTextColor={Gray}
        />
        <Search />
      </View>

      {loading ? (
        <BookListFade />
      ) : (
        <List
          data={bookList}
          renderItem={({item}) => {
            const addedToCart = idsInCart.includes(item.id);
            return (
              <BookCard
                book={item}
                onPress={() => goToBookDetail(item)}
                toggleCartItem={() => handleCartItem(item)}
                addedToCart={addedToCart}
              />
            );
          }}
          searchText={searchText}
        />
      )}
    </View>
  );
};

export default BookList;
