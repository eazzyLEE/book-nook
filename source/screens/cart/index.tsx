import React from 'react';
import {ScrollView, View} from 'react-native';
import {BackButton, Button, CartItem, Text} from '@components';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {
  addToCart,
  removeFromCart,
  removeFromCartByQuantity,
} from '@store/slices/book';
import {CartItemType} from '@store/types';

const Cart = () => {
  const dispatch = useAppDispatch();
  const {cart} = useAppSelector(state => state.books);
  const increaseQuantity = (cartItem: CartItemType) =>
    dispatch(addToCart(cartItem));
  const decreaseQuantity = (cartItem: CartItemType) => {
    if (cartItem.quantity > 0) {
      dispatch(removeFromCartByQuantity(cartItem));
    }
  };
  const removeItem = (cartItem: CartItemType) =>
    dispatch(removeFromCart(cartItem));
  const totalAmount = cart.reduce(
    (a, b) => a + b.quantity * Number(b.price),
    0,
  );
  const purchase = () => {};

  return (
    <View style={styles.background}>
      <BackButton style={styles.buttonTop} />
      <Text title="Cart" style={styles.title} type="h2" />

      <Text title="Order Summary" style={styles.headerTitle} />

      <View style={styles.listView}>
        <ScrollView>
          {cart.map(item => (
            <CartItem
              cartItem={item}
              style={styles.itemStyle}
              increaseQuantity={() => increaseQuantity(item)}
              decreaseQuantity={() => decreaseQuantity(item)}
              removeItem={() => removeItem(item)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.divider} />
      <View style={styles.totalView}>
        <Text title="Total" style={styles.totalText} type="p" />
        <Text title={`₦ ${totalAmount}`} style={styles.totalText} type="h2" />
      </View>

      <View style={styles.buttonView}>
        <Button title="Pay Now" onPress={purchase} />
      </View>
    </View>
  );
};

export default Cart;
