import React from 'react';
import {ActivityIndicator, Image, Pressable, View} from 'react-native';
import {Rating as RatingLib} from '@kolking/react-native-rating';
import {
  BackArrow,
  Book,
  Cart,
  Cross,
  Dash,
  GreenCheck,
  Trash,
} from '@assets/svgs';
import {Text} from '../Text';
import {
  styles,
  fadeStyles as fStyles,
  controlStyles as cStyles,
  cartItemStyles as iStyles,
  progressStyles as pStyles,
  iconStyles,
} from './styles';
import {Fade} from '../Fade';
import {
  BackButtonProps,
  BookCardProps,
  CartItemProps,
  ControlProps,
  ProgressViewProps,
} from '../types';
import {useNavigation} from '@react-navigation/native';
import {truncate} from '@components/utils';
import {Black, Button, imageList} from '@components';

export const BookCard = ({
  book,
  onPress,
  toggleCartItem,
  addedToCart,
}: BookCardProps) => {
  const bookTitle = truncate(book.Title, 13);
  const image = imageList[book.ImageId];
  const buttonTitle = addedToCart ? 'Remove' : 'Add to cart';
  const buttonView = [styles.addToCartButton, addedToCart && styles.removeView];
  const titleStyle = [styles.cartText, addedToCart && styles.removeTitle];

  return (
    <Pressable style={styles.cardView} onPress={onPress}>
      <Image source={image} style={styles.bookCover} />
      <View style={styles.infoText}>
        <Text title={bookTitle} style={styles.bookTitle} />
        <Text title={book.Publisher} style={styles.bookAuthor} />
      </View>

      <View style={styles.itemRow}>
        <Text title={`₦ ${book.Price}`} style={styles.amount} type="h2" />
        <Pressable style={buttonView} onPress={toggleCartItem}>
          <Text title={buttonTitle} style={titleStyle} />
        </Pressable>
      </View>
    </Pressable>
  );
};

export const BookListFade = () => {
  return Array.from({length: 3}, () => (
    <View style={fStyles.row}>
      <Fade style={fStyles.mainCard}>
        <Fade style={fStyles.bookCoverFade} />
        <Fade style={fStyles.textFade} />
      </Fade>

      <Fade style={fStyles.mainCard}>
        <Fade style={fStyles.bookCoverFade} />
        <Fade style={fStyles.textFade} />
      </Fade>
    </View>
  ));
};
const hitSlop = {top: 10, right: 10, left: 10, bottom: 10};

export const CartControlButton = ({
  quantity,
  style,
  decrease,
  increase,
}: ControlProps) => {
  return (
    <View style={[cStyles.block, style]}>
      <Pressable onPress={decrease} hitSlop={hitSlop}>
        <Dash />
      </Pressable>
      <View>
        <Text title={String(quantity)} />
      </View>
      <Pressable onPress={increase} hitSlop={hitSlop}>
        <Cross />
      </Pressable>
    </View>
  );
};

export const BackButton = ({style}: BackButtonProps) => {
  const {goBack} = useNavigation();

  return (
    <Pressable
      onPress={goBack}
      style={style}
      hitSlop={{top: 10, right: 10, left: 10, bottom: 10}}>
      <BackArrow />
    </Pressable>
  );
};

export const CartIcon = ({cartCount}: {cartCount: number}) => {
  const {navigate} = useNavigation();
  const goToCart = () => navigate('cart');

  const noItemsInCart = cartCount === 0;

  return (
    <Pressable onPress={goToCart}>
      {noItemsInCart ? (
        <View />
      ) : (
        <View style={iconStyles.cartIndicator}>
          <Text
            title={String(cartCount)}
            style={iconStyles.cartCount}
            type="p"
          />
        </View>
      )}
      <Cart />
    </Pressable>
  );
};

export const CartItem = ({
  cartItem,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  style,
}: CartItemProps) => {
  const quantity = cartItem.quantity;
  return (
    <View style={[iStyles.itemView, style]}>
      <View style={iStyles.nestedRow}>
        <View style={iStyles.bookMargin}>
          <Book />
        </View>
        <View style={iStyles.bookDetails}>
          <Text title={cartItem.Title} />
          <Text title={cartItem.Publisher} style={iStyles.publisher} />
          <Text title={`₦ ${cartItem.Price}`} style={iStyles.amount} />
        </View>
      </View>

      <View style={iStyles.nestedRow}>
        <CartControlButton
          quantity={quantity}
          // style={styles.controlButton}
          increase={increaseQuantity}
          decrease={decreaseQuantity}
        />
        <Pressable style={iStyles.trashView} onPress={removeItem}>
          <Trash />
        </Pressable>
      </View>
    </View>
  );
};

export const ProgressView = ({
  processing,
  completeOrder,
}: ProgressViewProps) => {
  if (processing) {
    return (
      <View style={pStyles.processingView}>
        <ActivityIndicator size="large" color={Black} />
        <Text title="Payment is processing..." style={pStyles.processingText} />
      </View>
    );
  }
  return (
    <View style={pStyles.progressView}>
      <Text title="Payment Successful" style={pStyles.title} type="h2" />
      <View style={pStyles.checkView}>
        <GreenCheck />
      </View>
      <Text
        title="Your payment has been processed and your order is now processing..."
        style={[pStyles.subtext]}
      />
      <Button title="Done" onPress={completeOrder} style={pStyles.button} />
    </View>
  );
};

export const Rating = () => {
  return <RatingLib size={18} rating={4.6} />;
};
