import React from 'react';
import {View} from 'react-native';
import {BackButton, CartItem, Text} from '@components';
import {styles} from './styles';

const Cart = () => {
  return (
    <View style={styles.background}>
      <BackButton style={styles.buttonTop} />
      <Text title="Cart" style={styles.title} type="h2" />

      <Text title="Order Summary" style={styles.headerTitle} />

      <CartItem style={styles.itemStyle} />
    </View>
  );
};

export default Cart;
