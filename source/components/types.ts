import {TextStyle, ViewStyle} from 'react-native';

export type TextProps = {
  style?: TextStyle | (TextStyle | undefined)[] | undefined;
  title: string;
};

export type ButtonProps = {
  onPress: () => void;
  style?: ViewStyle;
  title: string;
  titleStyle?: TextStyle;
};
