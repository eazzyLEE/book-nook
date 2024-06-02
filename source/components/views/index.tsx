import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {WelcomeCover} from '@assets/images';
import {BackArrow, Book, Cart, Cross, Dash, Trash} from '@assets/svgs';
import {Text} from '../Text';
import {
  styles,
  fadeStyles as fStyles,
  controlStyles as cStyles,
  cartItemStyles as iStyles,
  iconStyles,
} from './styles';
import {Fade} from '../Fade';
import {
  BackButtonProps,
  BookCardProps,
  CartItemProps,
  ControlProps,
} from '../types';
import {useNavigation} from '@react-navigation/native';
import {truncate} from '@components/utils';

export const BookCard = ({
  book,
  onPress,
  toggleCartItem,
  addedToCart,
}: BookCardProps) => {
  const bookTitle = truncate(book.Title, 13);
  const buttonTitle = addedToCart ? 'Remove' : 'Add to cart';
  const buttonView = [styles.addToCartButton, addedToCart && styles.removeView];
  const titleStyle = [styles.cartText, addedToCart && styles.removeTitle];

  return (
    <Pressable style={styles.cardView} onPress={onPress}>
      <Image source={WelcomeCover} style={styles.bookCover} />
      <View style={styles.infoText}>
        <Text title={bookTitle} style={styles.bookTitle} />
        <Text title={book.Publisher} style={styles.bookAuthor} />
      </View>

      <View style={styles.itemRow}>
        <Text title={`₦ ${book.price}`} style={styles.amount} type="h2" />
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

        {/* <View style={fStyles.infoGrid}>
          <Fade style={fStyles.mdBoxFade} />
          <Fade style={fStyles.halfBoxFade} />
        </View>
        <Fade style={fStyles.bgCardFade} /> */}
      </Fade>

      <Fade style={fStyles.mainCard}>
        <Fade style={fStyles.bookCoverFade} />
        <Fade style={fStyles.textFade} />

        {/* <View style={fStyles.infoGrid}>
          <Fade style={fStyles.mdBoxFade} />
          <Fade style={fStyles.halfBoxFade} />
        </View>
        <Fade style={fStyles.bgCardFade} /> */}
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
          <Text title={`₦ ${cartItem.price}`} style={iStyles.amount} />
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
