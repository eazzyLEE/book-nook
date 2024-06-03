import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {
  BackButton,
  Button,
  CartItem,
  Modal,
  ProgressView,
  Text,
} from '@components';
import {styles} from './styles';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {
  addToCart,
  clearCart,
  removeFromCart,
  removeFromCartByQuantity,
} from '@store/slices/book';
import {CartItemType} from '@store/types';
import {CartProps} from '@navigation/types';

const Cart = ({navigation}: CartProps) => {
  const dispatch = useAppDispatch();
  const {cart} = useAppSelector(state => state.books);
  const [modalVisible, setModalVisible] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(true);

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
    (a, b) => a + b.quantity * Number(b.Price),
    0,
  );
  const noItemsInCart = cart.length === 0;

  const purchase = () => {
    setModalVisible(true);
    setTimeout(() => {
      setPaymentProcessing(false);
    }, 1300);
  };

  const completeOrder = () => {
    dispatch(clearCart());
    setModalVisible(false);
    setPaymentProcessing(true);
    navigation.reset({index: 0, routes: [{name: 'book_list'}]});
  };

  return (
    <View style={styles.background}>
      <BackButton style={styles.buttonTop} />
      <Text title="Cart" style={styles.title} type="h2" />

      <Text title="Order Summary" style={styles.headerTitle} />

      {noItemsInCart ? (
        <View style={styles.emptyCartView}>
          <Text title="You have no items in the cart" />
          <Text title="Select a book and add to cart to proceed" />
        </View>
      ) : (
        <>
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
            <Text
              title={`₦ ${totalAmount}`}
              style={styles.totalText}
              type="h2"
            />
          </View>

          <View style={styles.buttonView}>
            <Button title="Pay Now" onPress={purchase} />
          </View>
        </>
      )}

      <Modal visible={modalVisible}>
        <ProgressView
          processing={paymentProcessing}
          completeOrder={completeOrder}
        />
      </Modal>
    </View>
  );
};

export default Cart;
