import React from 'react';
import {Image, View} from 'react-native';
import {detailStyles as styles} from './styles';
import {
  BackButton,
  Button,
  CartControlButton,
  CartIcon,
  Rating,
  Text,
  imageList,
} from '@components';
import {BookDetailProps} from '@navigation/types';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {
  addToCart,
  removeFromCart,
  removeFromCartByQuantity,
} from '@store/slices/book';

const BookDetail = ({route}: BookDetailProps) => {
  const dispatch = useAppDispatch();
  const {cart} = useAppSelector(state => state.books);
  const book = route.params.book;
  const quantity = cart.find(item => item.id === book.id)?.quantity || 1;

  const image = imageList[book.ImageId];
  const idsInCart = cart.map(item => item.id);
  const itemIsInCart = idsInCart.includes(book.id);
  const handleCartItem = () => {
    if (itemIsInCart) {
      dispatch(removeFromCart(book));
    } else {
      dispatch(addToCart(book));
    }
  };
  const increaseQuantity = () => dispatch(addToCart(book)); // setQuantity(previousQty => previousQty + 1);
  const decreaseQuantity = () => {
    if (quantity > 0) {
      dispatch(removeFromCartByQuantity(book)); // setQuantity(previousQty => previousQty - 1);
    }
  };
  const cartCount = cart.reduce((a, b) => a + b.quantity, 0);
  const buttonTitle = itemIsInCart ? 'Remove from Cart' : 'Add to Cart';

  return (
    <View style={styles.background}>
      <View style={styles.headerPane}>
        <BackButton />
        <CartIcon cartCount={cartCount} />
      </View>
      <View style={styles.detailView}>
        <Image source={image} style={styles.image} />
        <View style={styles.infoView}>
          <Text title={book.Title} style={styles.title} type="h1" />
          <Text
            title={`Publisher: ${book.Publisher}`}
            style={styles.publisher}
          />
          <Text title={`₦ ${book.Price}`} style={styles.amount} type="h2" />
          <View style={styles.ratingView}>
            <Text title="4.6" style={styles.ratingText} />
            <Rating />
          </View>
          <Text
            title="5,721 ratings  1,745 reviews"
            style={styles.ratingMetrics}
          />
          {itemIsInCart ? (
            <CartControlButton
              quantity={quantity}
              style={styles.controlButton}
              increase={increaseQuantity}
              decrease={decreaseQuantity}
            />
          ) : (
            <View style={styles.cartView} />
          )}
        </View>
      </View>

      <View style={styles.descriptionView}>
        <Text
          title="When Alexandra Witt joins the faculty at Stonebridge Academy, she’s hoping to put a painful past behind her. Then one of her creative writing assignments generates some disturbing responses from students. Before long, Alex is immersed in an investigation of the students atop the school’s social hierarchy—and their connection to something called the Darkroom."
          style={styles.description}
        />

        <Text title="She soon inspires the girls who’ve started to question the school’s “boys will be boys” attitude and incites a resistance. But just as the movement is gaining momentum, Alex attracts the attention of an unknown enemy who knows a little too much about her—and what brought her to Stonebridge in the first place." />
      </View>

      <View style={styles.buttonView}>
        <Button title={buttonTitle} onPress={handleCartItem} />
      </View>
    </View>
  );
};

export default BookDetail;
