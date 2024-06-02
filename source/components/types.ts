import {ReactNode} from 'react';
import {ListRenderItem, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Book, CartItemType} from '@store/types';

type TextType = 'h1' | 'h2' | 'p';

export type TextProps = {
  children?: ReactNode;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
  title: string;
  type?: TextType;
};

export type ButtonProps = {
  onPress: () => void;
  style?: ViewStyle;
  title: string;
  titleStyle?: TextStyle;
};

export interface ListProps {
  data: {id: number}[];
  isRefreshing?: boolean;
  handlePullToRefresh?: () => void;
  renderItem: ListRenderItem<any>;
  noSeparator?: boolean;
  emptyListText?: string;
  fetchMore?: () => void;
  isFetchingMore?: boolean;
  style?: ViewStyle;
  searchText?: string;
}

export type BookCardProps = {
  book: Book;
  onPress: () => void;
  toggleCartItem: () => void;
  addedToCart: boolean;
};

export type ControlProps = {
  decrease: () => void;
  increase: () => void;
  quantity: number;
  style?: ViewStyle;
};

export type BackButtonProps = {
  style?: ViewStyle;
};

export type CartItemProps = {
  style?: ViewStyle;
  cartItem: CartItemType;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  removeItem: () => void;
};
