import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import BookDetail from '../BookDetail'; // Adjust the import path accordingly
import {BookDetailProps} from '@navigation/types';
import {
  addToCart,
  removeFromCart,
  removeFromCartByQuantity,
} from '@store/slices/book';

const mockStore = configureStore([]);
const book = {
  id: 1,
  Title: 'Sample Book',
  Publisher: 'Sample Publisher',
  Price: '1000',
  ImageId: 0,
  Pages: 199,
  Year: '1974',
  ISBN: '978-0-385-08695-0',
  Notes: ['Nominee, World Fantasy Award, 1976[2]'],
};

describe('BookDetail Component', () => {
  let store: any;
  let props: BookDetailProps;

  beforeEach(() => {
    store = mockStore({
      books: {
        cart: [],
      },
    });

    props = {
      route: {
        params: {
          book,
        },
      },
    } as BookDetailProps;

    store.dispatch = jest.fn();
  });

  it('should render book details', () => {
    const {getByText} = render(
      <Provider store={store}>
        <BookDetail {...props} />
      </Provider>,
    );

    expect(getByText('Sample Book')).toBeTruthy();
    expect(getByText('Publisher: Sample Publisher')).toBeTruthy();
    expect(getByText('₦ 1000')).toBeTruthy();
  });

  it('should add book to cart', () => {
    const {getByText} = render(
      <Provider store={store}>
        <BookDetail {...props} />
      </Provider>,
    );

    fireEvent.press(getByText('Add to Cart'));
    expect(store.dispatch).toHaveBeenCalledWith(addToCart(book));
  });

  it('should remove book from cart', () => {
    store = mockStore({
      books: {
        cart: [{...book, quantity: 1}],
      },
    });

    const {getByText} = render(
      <Provider store={store}>
        <BookDetail {...props} />
      </Provider>,
    );

    fireEvent.press(getByText('Remove from Cart'));
    expect(store.dispatch).toHaveBeenCalledWith(removeFromCart(book));
  });

  it('should increase quantity of book item in cart', () => {
    store = mockStore({
      books: {
        cart: [{...book, quantity: 1}],
      },
    });

    const {getByTestId} = render(
      <Provider store={store}>
        <BookDetail {...props} />
      </Provider>,
    );

    fireEvent.press(getByTestId('increase-quantity'));
    expect(store.dispatch).toHaveBeenCalledWith(addToCart(book));
  });

  it('should decrease quantity of book item in cart', () => {
    store = mockStore({
      books: {
        cart: [{...book, quantity: 2}],
      },
    });

    const {getByTestId} = render(
      <Provider store={store}>
        <BookDetail {...props} />
      </Provider>,
    );

    fireEvent.press(getByTestId('decrease-quantity'));
    expect(store.dispatch).toHaveBeenCalledWith(removeFromCartByQuantity(book));
  });
});
